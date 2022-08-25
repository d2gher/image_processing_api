"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const fs_1 = __importDefault(require("fs"));
const resizeUtils_1 = __importDefault(require("../utils/resizeUtils"));
const request = (0, supertest_1.default)(app_1.default);
describe("Server testing", () => {
    it("Test GET /resize", async () => {
        const res = await request.get("/resize");
        expect(res.statusCode).toBe(200);
    });
});
describe("Function test", () => {
    it("Test image processing function", async () => {
        fs_1.default.access("./public/images/output/fjord_200_600.jpg", async (err) => {
            if (!err) {
                fs_1.default.unlink("./public/images/output/fjord_200_600.jpg", (err) => {
                    if (err)
                        console.log(err);
                });
            }
            await (0, resizeUtils_1.default)("fjord", 200, 600);
            const result = fs_1.default.access("./public/images/output/fjord_200_600.jpg", async (err) => {
                if (err)
                    return false;
                else
                    return true;
            });
            fs_1.default.unlink("./public/images/output/fjord_200_600.jpg", (err) => {
                if (err)
                    console.log(err);
            });
            expect(result).toBeTrue();
        });
    });
});
// describe("Functions", () => {
//   it("Test image processing function", async () => {
//     let result = 0;
//     // Creates a new image
//     await request.get("/resize?name=fjord&width=200&height=600");
//     // Searches if the image exists
//     fs.access("./public/images/output/fjord_200_600.jpg", async (err) => {
//       // if it didn't find it then that means the process failed, result will equal 0
//       if (err) result = 0;
//       // if it didn find it then that means the process succeded
//       // the file will be removed and result will equal 1
//       else {
//         fs.unlink("./public/images/output/fjord_200_600.jpg", (err) => {
//           if (err) console.log(err);
//         });
//         result = 1;
//       }
//       expect(result).toBe(1);
//     });
//   });
// })
