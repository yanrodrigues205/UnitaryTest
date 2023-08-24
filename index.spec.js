const request  = require("supertest");
const app = require("./server");
describe("Este é o primeiro teste da API", () => {
    it("testando meu app", async () => {
        const res =
        await request(app)
        .get("/")
        .send({
        });

        expect(res.body).toHaveProperty("mensageam");
    });
});