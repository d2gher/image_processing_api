"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const fs_1 = __importDefault(require("fs"));
const request = (0, supertest_1.default)(app_1.default);
describe("Server testing", () => {
    it("Test GET /resize", async () => {
        const res = await request.get("/resize");
        expect(res.statusCode).toBe(200);
    });
    it("Test image processing", async () => {
        let result = 0;
        // Creates a new image
        await request.get("/resize?name=fjord&width=200&height=600");
        // Searches if the image exists
        fs_1.default.access("./public/images/output/fjord_200_600.jpg", async (err) => {
            // if it didn't find it then that means the process failed, result will equal 0
            if (err)
                result = 0;
            // if it didn find it then that means the process succeded
            // the file will be removed and result will equal 1
            else {
                fs_1.default.unlink("./public/images/output/fjord_200_600.jpg", (err) => {
                    if (err)
                        console.log(err);
                });
                result = 1;
            }
            expect(result).toBe(1);
        });
    });
});
