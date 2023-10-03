import userService from "../service/user-service.js";

const getAllUsers = async (req, res, next) => {
  try {
    const result = await userService.getAllUsers();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const { username } = req.params;
    const result = await userService.getSingleUser(username);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getUserRewards = async (req, res, next) => {
  try {
    const { username } = req.params;
    const { at } = req.query;
    const result = await userService.getUserRewards(username, at);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  getAllUsers,
  getSingleUser,
  getUserRewards,
};
