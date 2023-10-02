import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import {
  createManyTestUser,
  deleteManyTestUser,
} from "../__test_utils__/user-util.js";

describe("GET /api/users", () => {
  beforeEach(async () => {
    await createManyTestUser();
  });

  afterEach(async () => {
    await deleteManyTestUser();
  });

  it("should can get all users", async () => {
    const result = await supertest(web).get("/api/users");

    expect(result.status).toBe(200);
  });

  it("should can get single user", async () => {
    const result = await supertest(web).get("/api/users/test__1");

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test__1");
  });

  it("should can't get single user", async () => {
    const result = await supertest(web).get("/api/users/blabla");

    expect(result.status).toBe(404);
  });

  it("should can rewards data with parameter user", async () => {
    const result = await supertest(web).get("/api/users/test__1/rewards");

    expect(result.status).toBe(200);
  });
});
