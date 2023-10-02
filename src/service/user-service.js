import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";

const getAllUsers = async () => {
  const users = await prismaClient.user.findMany();

  return users;
};

const getSingleUser = async (username) => {
  const user = await prismaClient.user.findFirst({
    where: {
      username: username,
    },
    select: {
      username: true,
      name: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, "user is not found");
  }

  return user;
};

const getUserRewards = async (username, query) => {
  const user = await prismaClient.user.findFirst({
    where: {
      username: username,
    },
    select: {
      name: true,
      username: true,
      rewards: true,
    },
  });

  return user;
};

export default { getAllUsers, getSingleUser, getUserRewards };
