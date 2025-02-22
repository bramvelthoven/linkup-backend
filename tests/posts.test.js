import request from "supertest";
import app from "../src/index.js";

describe("Posts API", () => {
    it("should get all posts", async () => {
        const res = await request(app).get("/api/posts");
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});