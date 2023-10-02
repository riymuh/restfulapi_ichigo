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

export { removeTestUser, createTestUser };
