import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createPost: async (_, args, {request, isAuthenticated}) => {
            isAuthenticated(request);
            const {title, contents, images} = args;
            const {user} = request;

            try {
                const post = await prisma.createPost({
                    title,
                    contents,
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
                return post;
            } catch (error) {
                throw Error(error);
            }
        }
    }
};
