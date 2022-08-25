import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("Server testing", () => {
  it("Test GET /resize", async () => {
    const res = await request.get("/resize");
    expect(res.statusCode).toBe(200);
  });
});
