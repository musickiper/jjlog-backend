import { prisma } from "../../../generated/prisma-client";

export default {
  Comment: {
    user: async ({ id }) => prisma.comment({ id }).user()
  }
};
