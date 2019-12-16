import {prisma} from "../../../../generated/prisma-client";

export default {
    Query: {
        userByUsername: (_,{username}) => prisma.user({username})
    }
}
