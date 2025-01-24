const chai = require("chai"); // Use CommonJS require
const chaiHttp = require("chai-http");
const app = require("../src/index"); // Import your Express app

chai.use(chaiHttp); // Register chai-http plugin
const { expect } = chai; // Destructure `expect`

describe("API Tests", () => {
  it("Should respond with 'API is running' on the root endpoint", async () => {
    const res = await chai.request(app).get("/"); // Use chai.request directly
    expect(res).to.have.status(200);
    expect(res.body).to.deep.equal({ message: "API is running" });
  });

  it("Should return processed file data at /files/data", async () => {
    const res = await chai.request(app).get("/files/data");
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");
  });
});
