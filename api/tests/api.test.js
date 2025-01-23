const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index");

chai.use(chaiHttp);
const { expect } = chai;

describe("API Tests", () => {
  it("should fetch and format data", (done) => {
    chai
      .request(app)
      .get("/files/data")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});
