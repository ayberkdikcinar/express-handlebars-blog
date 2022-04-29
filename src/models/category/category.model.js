const categoryModel = require('./category.mongo');

async function findById(id) {
    try {
        return await categoryModel.findById(id);

    } catch (error) {
        console.error(`${error}, An error has occurred while retrieving category data from the DB`);
    }
}

async function add(category) {
    try {
        return await categoryModel.findOneAndUpdate(
            {
                name: category.name
            },
            category,
            { upsert: true, new: true });

    } catch (error) {
        console.error(`${error}, An error has occurred while adding category to the DB`);
    }

}

async function remove(id) {
    try {
        return await categoryModel.findByIdAndRemove(id);
    } catch (error) {
        console.error(`${error}, An error has occurred while removing category from the DB`);
    }
}

async function retrieveAll() {
    try {
        return await categoryModel.find({}, { '__v': 0 }).lean();

    } catch (error) {
        console.error(`${error}, An error has occurred while retrieving all categories from the DB`);
    }
}

module.exports = {
    remove,
    add,
    findById,
    retrieveAll,
}