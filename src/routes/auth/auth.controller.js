const userModel = require('../../models/user/user.model')

function renderSignUp(req, res) {
    res.render('signup')
}

function renderSignIn(req, res) {
    res.render('signin')
}

async function signUp(req, res) {
    let newUser = req.body;
    await userModel.add(newUser);
    res.redirect('signin');
}

async function signIn(req, res) {
    console.log(`signed in user is:${req.user}`);
    if (req.user) {
        res.render('index', { signedIn: 'Successfully SignedIn' });
    }
}

module.exports = {
    signUp,
    renderSignIn,
    renderSignUp,
    signIn,
}