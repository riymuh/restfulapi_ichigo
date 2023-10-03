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

const getUserRewards = async (username, at) => {
  const user = await prismaClient.user.findFirst({
    where: {
      username: username,
    },
  });

  if (!user) {
    throw new ResponseError(404, "user is not found");
  }

  const rewards = await prismaClient.reward.findMany({
    where: {
      user_id: user.id,
      available_at: {
        gte: new Date(at).toISOString(),
      },
    },
  });

  if (!rewards) {
    throw new ResponseError(200, "user have't rewards");
  }

  return rewards;
};

export default { getAllUsers, getSingleUser, getUserRewards };
