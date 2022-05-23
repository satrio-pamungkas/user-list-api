import { showAllUsers } from "../../src/controllers/user.controller";
import { generateUserData } from "../mocks/generate";
import request from 'supertest';
import {app} from "../../index";

afterEach(() => {
    jest.resetAllMocks();
});

describe("showAllUsers", () => { 
    test("Should return 200", async () => {
        const result = await request(app).get("/api/v1/users/all").send();
        expect(result.status).toBe(200);
    })
})