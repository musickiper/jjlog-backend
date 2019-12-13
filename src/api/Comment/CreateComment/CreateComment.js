import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createComment: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const {
        user: { id: userId }
      } = request;
      const { contents, postId } = args;
      try {
        await prisma.createComment({
          contents: contents,
          user: {
            connect: {
              id: userId
            }
          },
          post: {
            connect: {
              id: postId
            }
          }
        });
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    }
  }
};
