let dataBase = require('../models/dataBase');

module.exports = {
    async store(req, res){
        let {user, name, admin, password ,picture, email, adress} = req.body;
        
        const userExist = await (dataBase.findOne({user}) || dataBase.findOne({email}));
        
        if(userExist){
            return res.status(409).json(userExist);
        }
        if((admin && password == 123) || !admin){
            let db = await dataBase.create({
                user,
                name,
                admin,
                email,
                adress,
                picture,
            });
            return res.json(db);
        }
        return res.status(403).json({
            error: 'Senha incorreta, voce nao pode ser um adm'
        });
    }
};