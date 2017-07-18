var expect = require('chai').expect;
var chai = require('chai');
var request = require('request');
let should = chai.should();
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

//Signup new user
describe('signup user', () => {
    it('signup', (done) => {

        var user = {
            name: "olever",
            username: "oliver",
            password: "abc123"
        }
        chai.request('http://localhost:3000/api')
            .post('/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('message').eql('User has been created!');
                done();
            });
    });
});