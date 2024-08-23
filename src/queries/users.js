import { User } from "@/model/user"

export const createUser = async (user) => {
  try {
    await User.create(user);
  } catch (error) {
    throw new Error(error);
  }
}

export const getUserByEmail = async (email) => {
  const user = await User.findOne({ email: email }).select("-password").lean();
  return user;
}