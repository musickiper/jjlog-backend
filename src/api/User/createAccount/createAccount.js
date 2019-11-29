import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, firstName = "", lastName = "" } = args;
      try {
        const exists = await prisma.$exists.user({
          OR: [{ username }, { email }]
        });
        if (exists) {
          throw Error("The username or email is already taken");
        } else {
          await prisma.createUser({
            username,
            email,
            firstName,
            lastName
          });
          return true;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  }
};
