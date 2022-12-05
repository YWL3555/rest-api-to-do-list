const request = require('supertest');
const app = require('./index.js');

describe('To do list API',()=>{
    it('GET /lists --> array of lists', ()=>{
        return request(app)
        .get('/lists')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    title: expect.any(String)
                })
            ]))
        })
    });

    it('GET /lists/id --> specific list', ()=>{
        return request(app)
        .get('/lists/2')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: 2
                })
            )
        })
    });

    it('POST /lists --> create new list', ()=>{
        return request(app)
        .post('/lists').send({
            title: 'Testing list'
        }).expect('Content-Type',/json/)
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    title: 'Testing list'
                })
            )
        })
    })

    it('DELETE /lists --> 404 if not found', ()=>{
        return request(app)
        .delete('/lists/9999')
        .expect(404)
    })
    
})

describe('To do item API',()=>{
    it('GET /lists/id/items --> array of lists under same list id', ()=>{
        return request(app)
        .get('/lists/2/items')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    toDoListId: 2
                })
            ]))
        })
    });

    it('POST /lists/id/items --> create new item under specific list', ()=>{
        return request(app)
        .post('/lists/2/items').send({
            name: 'Testing item',
            description: 'This is description',
            dueDate: '2023-01-31'
        }).expect('Content-Type',/json/)
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    name: 'Testing item',
                    description: 'This is description',
                    dueDate: '2023-01-31'
                })
            )
        })
    })
    
})