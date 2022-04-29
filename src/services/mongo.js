const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
    console.debug('Database connection is now opened.');
})
mongoose.connection.on('error', (err) => {
    console.error(`${err} Database connection error.`);
})

async function connectToMongoDB() {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.error(`${err} Database connection error`);
    }
}

async function disconnectFromMongoDB() {
    try {
        await mongoose.disconnect();
    } catch (err) {
        console.error(`${err} An error occurred while disconnecting from the MONGO database.`);
    }
}

module.exports = {
    connectToMongoDB,
    disconnectFromMongoDB,
}