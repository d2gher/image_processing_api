import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("Server testing", () => {
  it("Test GET /placeholder", async () => {
    const res = await request.get("/placeholder");
    expect(res.statusCode).toBe(200);
  });
});
