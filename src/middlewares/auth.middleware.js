const userModel = require('../models/user/user.model')

async function authCheck(req, res, next) {

    const user = await userModel.findByEmail(req.body.email);
    if (user) {
        const isPasswordTrue = userModel.checkPasswordCorrectness(user, req.body.password);
        console.log(req.body.password);
        console.log(isPasswordTrue);
        if (isPasswordTrue) {
            req.user = user;
            return next();
        }
        console.log('password was wrong.');
        return res.status(401).json({ error: 'Credentials were wrong.' });
    }

}

module.exports = {
    authCheck,
}