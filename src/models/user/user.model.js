const userModel = require('./user.mongo')

async function findById(id) {
    try {
        return await userModel.findById(id);

    } catch (error) {
        console.error(`${error}, An error has occurred while retrieving user data from the DB`);
    }
}

async function findByEmail(email) {
    try {
        return await userModel.findOne({ email: email });

    } catch (error) {
        console.error(`${error}, An error has occurred while retrieving user data from the DB`);
    }
}

async function add(user) {
    try {
        return await userModel.findOneAndUpdate(
            {
                email: user.email
            },
            user,
            { upsert: true, new: true });

    } catch (error) {
        console.error(`${error}, An error has occurred while adding user to the DB`);
    }

}
async function remove(id) {
    try {
        return await userModel.findByIdAndRemove(id);
    } catch (error) {
        console.error(`${error}, An error has occurred while removing user from the DB`);
    }
}

function checkPasswordCorrectness(user, password) {
    if (user.password === password) {
        return true;
    }
    return false;
}

module.exports = {
    remove,
    add,
    findById,
    findByEmail,
    checkPasswordCorrectness,
}