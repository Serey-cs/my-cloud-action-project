// test/test.js
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app/app.js';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', function () {
  it('should return hello message', function (done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, GitHub Actions!');
        done();
      });
  });
});
