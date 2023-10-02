import { prismaClient } from "../src/application/database.js";
import bcrypt from "bcrypt";

const createTestUser = async () => {
  const password = await bcrypt.hash("password", 10);

  await prismaClient.user.create({
    data: {
      username: "test",
      password: password,
      name: "test",
      token: "test",
    },
  });
};

const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      username: "test",
    },
  });
};

const createManyTestUser = async () => {
  const password = await bcrypt.hash("password", 10);
  const users = [];

  for (let i = 0; i < 20; i++) {
    users.push({
      username: `test__${i}`,
      password: password,
      name: `test`,
      token: "test",
    });
  }

  await prismaClient.user.createMany({
    data: users,
  });
};

const deleteManyTestUser = async () => {
  const usernames = [];

  for (let i = 0; i < 20; i++) {
    usernames.push(`test__${i}`);
  }

  await prismaClient.user.deleteMany({
    where: {
      username: {
        in: usernames,
      },
    },
  });
};

export {
  removeTestUser,
  createTestUser,
  createManyTestUser,
  deleteManyTestUser,
};
