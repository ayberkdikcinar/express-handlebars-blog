const mongoDB = require('./services/mongo')
const app = require('./app')

const PORT = process.env.PORT || 8000;

async function start() {
    await mongoDB.connectToMongoDB();
    app.listen(PORT, () => {
        console.log(`Application starts on PORT:${PORT}`)
    });
}

start();