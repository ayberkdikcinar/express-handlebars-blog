const request = require('supertest');
const app = require('../../app')
const mongoService = require('../../services/mongo')
const postModel = require('../../models/post/post.model')


describe('POST TESTS', () => {

    beforeAll(async () => {
        await mongoService.connectToMongoDB();
    });

    describe('API TESTS', () => {

        describe('TEST GET /add', () => {
            test('should respond with 200 success', async () => {
                await request(app).get('/post/add').expect(200);
            });
        });

        describe('TEST POST /add', () => {
            test('should respond with 201 Created', async () => {
                await request(app).post('/post/add').send({
                    title: 'TEST',
                    category: 'TEST',
                    content: 'CONTENT',
                    date: Date.now(),
                }).expect(201);

            });
        });
    });

    describe('POST UNIT TESTS', () => {
        test('should respond with post itself', async () => {
            const newPost = { category: 'test', title: 'test', content: 'test' };
            const response = await postModel.add(newPost);
            expect(response.title).toBe(newPost.title);
        });
        test('should not delete post by WrongId', async () => {
            const response = await postModel.remove('41224d776a326fb40f000001');
            expect(response).toBe(null);
        });
        test('should delete the correct Post', async () => {
            const newPost = { category: 'test', title: 'test', content: 'test' };
            const addResponse = await postModel.add(newPost);

            const response = await postModel.remove(addResponse._id);
            expect(response._id).toStrictEqual(addResponse._id);
        });
    });

    afterAll(async () => {
        await mongoService.disconnectFromMongoDB();

    });

});



