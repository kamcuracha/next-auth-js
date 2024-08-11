import { User } from "@/model/user"

export const createUser = async (user) => {
  try {
    await User.create(user);
  } catch (error) {
    throw new Error(error);
  }
}