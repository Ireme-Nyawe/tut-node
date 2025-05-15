import bcrypt from "bcrypt";

export const hasPassword = async (unHashedpassword) => {
  return await bcrypt.hash(unHashedpassword, 10);
};
