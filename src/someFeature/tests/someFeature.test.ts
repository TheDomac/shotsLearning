import request from "supertest";

import app from "../../shared/tests/app";


describe('some feature', function() {
    it('tests this feature', async () => {
        const exampleBody = {name: "john"};

      const response = await request(app)
        .post('/name')
        .send(JSON.stringify(exampleBody))
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")

        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual(exampleBody);
    });
  });
