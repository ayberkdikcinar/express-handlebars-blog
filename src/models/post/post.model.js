const postModel = require('./post.mongo');

async function findById(id) {
    try {
        return await postModel.findById(id).lean();

    } catch (error) {
        console.error(`${error}, An error has occurred while retrieving post data from the DB`);
    }
}

async function add(post) {
    try {

        Object.assign(post, {
            postDate: Date.now()
        });
        return await postModel.findOneAndUpdate(
            {
                user: post.user,
                title: post.title,
                content: post.content,
            },
            post,
            { upsert: true, new: true }).lean();


    } catch (error) {
        console.error(`${error}, An error has occurred while adding post to the DB`);
    }

}

async function remove(id) {
    try {
        return await postModel.findByIdAndRemove(id);
    } catch (error) {
        console.error(`${error}, An error has occurred while removing post from the DB`);
    }
}

async function retrieveAll(skip, limit) {
    try {
        return await postModel.find({}, { '__v': 0 })
            .skip(skip)
            .limit(limit);

    } catch (error) {
        console.error(`${error}, An error has occurred while retrieving all posts from the DB`);
    }
}

async function retrieveDeactives(skip, limit) {
    try {
        return await postModel.find({ active: 0 }, { '__v': 0 })
            .skip(skip)
            .limit(limit);

    } catch (error) {
        console.error(`${error}, An error has occurred while retrieving deactive posts from the DB`);
    }
}

async function retrieveActives(skip, limit) {
    try {
        return await postModel.find({ active: 1 }, { '__v': 0 })
            .lean()
            .skip(skip)
            .limit(limit);

    } catch (error) {
        console.error(`${error}, An error has occurred while retrieving active posts from the DB`);
    }
}

async function retrievePostsByUser(user, skip, limit) {
    try {
        return await postModel.find({ user: user }, { '__v': 0, '_id': 0 })
            .skip(skip)
            .limit(limit);

    } catch (error) {
        console.error(`${error}, An error has occurred while retrieving posts by user from the DB`);
    }
}

async function retrievePostsByCategory(category, skip, limit) {
    try {
        return await postModel.find({ category: category }, { '__v': 0, '_id': 0 })
            .skip(skip)
            .limit(limit)
            .sort({ postDate: 1 });

    } catch (error) {
        console.error(`${error}, An error has occurred while retrieving posts by category from the DB`);
    }
}
module.exports = {
    remove,
    add,
    findById,
    retrieveAll,
    retrievePostsByUser,
    retrievePostsByCategory,
    retrieveDeactives,
    retrieveActives,
}