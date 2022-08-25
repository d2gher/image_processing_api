"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const request = (0, supertest_1.default)(app_1.default);
describe("Server testing", () => {
  it("Test GET /placeholder", async () => {
    const res = await request.get("/placeholder");
    expect(res.statusCode).toBe(200);
  });
});
