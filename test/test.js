const chai = require('chai');
const chaiHttp = require('chai-http');
const path = require('path');
const app = require(path.resolve(__dirname, '../app/app'));


chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', function () {
  it('should return hello message', function (done) {
    chai.request(app)
      .get('/')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, GitHub Actions Updated!');
        done();
      });
  });
});
