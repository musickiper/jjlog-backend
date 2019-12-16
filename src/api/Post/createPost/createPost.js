import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { title, contents, summary, images, categories } = args;
      const { user } = request;

      try {
        const post = await prisma.createPost({
          title,
          contents,
          summary,
          user: {
            connect: {
              email: user.email
            }
          }
        });
        for (let image of images) {
          await prisma.createImage({
            url: image,
            post: {
              connect: {
                id: post.id
              }
            }
          });
        }
        for (let category of categories) {
          const exist = await prisma.$exists.category({ title: category });
          if (exist) {
            await prisma.updateCategory({
              where: {
                title: category
              },
              data: {
                posts: {
                  connect: {
                    id: post.id
                  }
                }
              }
            });
          } else {
            await prisma.createCategory({
              title: category,
              posts: {
                connect: {
                  id: post.id
                }
              }
            });
          }
        }
        return post;
      } catch (error) {
        throw Error(error);
      }
    }
  }
};
