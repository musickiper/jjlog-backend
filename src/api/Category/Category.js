import {prisma} from "../../../generated/prisma-client";

export default {
    Category: {
        count: async ({id}) => {
            const posts = await prisma.category({id}).posts();
            return posts.length;
        },
        posts: ({id}) => prisma.category({id}).posts()
    }
}
