import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("Server testing", () => {
  it("Test GET /", async () => {
    const res = await request.get("/");
    expect(res.statusCode).toBe(200);
  });
});
