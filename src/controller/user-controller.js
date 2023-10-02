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
    const query = null;
    const result = await userService.getUserRewards(username, query);
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
