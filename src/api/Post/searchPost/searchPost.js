import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPost: async (_, args) => {
      const { term } = args;

      return prisma.posts({
        where: {
          OR: [{ title_contains: term }, { contents_contains: term }]
        }
      });
    }
  }
};
