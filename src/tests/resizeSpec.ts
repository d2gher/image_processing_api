import supertest from "supertest";
import app from "../app";
import fs from "fs";
import resize from "../utils/resizeUtils";

const request = supertest(app);

describe("Server testing", () => {
  it("Test GET /resize", async () => {
    const res = await request.get("/resize");
    expect(res.statusCode).toBe(200);
  });
});

describe("Function test", () => {
  it("Test image processing function", async () => {
    fs.access("./public/images/output/fjord_200_600.jpg", async (err) => {
      if (!err) {
        fs.unlink("./public/images/output/fjord_200_600.jpg", (err) => {
          if (err) console.log(err);
        });
      }

      await resize("fjord", 200, 600);

      const result = fs.access(
        "./public/images/output/fjord_200_600.jpg",
        async (err) => {
          if (err) return false;
          else return true;
        }
      );

      fs.unlink("./public/images/output/fjord_200_600.jpg", (err) => {
        if (err) console.log(err);
      });

      expect(result).toBeTrue();
    });
  });
});
