import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import { removeTestUser, createTestUser } from "../__test_utils__/user-util.js";
import bcrypt from "bcrypt";

describe("POST /api/register", () => {
  afterEach(async () => {
    await removeTestUser();
  });

  it("should can register new user", async () => {
    const result = await supertest(web).post("/api/register").send({
      username: "test",
      password: "password",
      name: "test",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("test");
    expect(result.body.data.password).toBeUndefined();
  });

  it("should reject if request is invalid", async () => {
    const result = await supertest(web).post("/api/register").send({
      username: "test",
      password: "password",
    });

    expect(result.status).toBe(400);
    expect(result.body.errros).toBeDefined;
  });

  it("should reject if username already used", async () => {
    let result = await supertest(web).post("/api/register").send({
      username: "test",
      password: "password",
      name: "test",
    });

    result = await supertest(web).post("/api/register").send({
      username: "test",
      password: "password",
      name: "test",
    });

    expect(result.status).toBe(400);
    expect(result.body.errros).toBeDefined;
  });
});

describe("POST /api/login", () => {
  beforeEach(async () => {
    await createTestUser();
  });

  // afterEach(async () => {
  //   await deleteManyRewardsTestUser();
  // });

  afterEach(async () => {
    await removeTestUser();
  });

  it("should can login new user", async () => {
    const result = await supertest(web).post("/api/login").send({
      username: "test",
      password: "password",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.token).toBeDefined;
  });

  it("should can't login user cause wrong password", async () => {
    const result = await supertest(web).post("/api/login").send({
      username: "test",
      password: "passwordsalah",
    });

    expect(result.status).toBe(401);
    expect(result.body.errros).toBeDefined;
  });
});

describe("DELETE /api/logout", () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it("user can logout", async () => {
    const result = await supertest(web)
      .delete("/api/logout")
      .set("Authorization", "test");

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBeDefined;
  });
});
