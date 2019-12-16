import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    user: ({ id }) => prisma.post({ id }).user(),
    comments: ({ id }) => prisma.post({ id }).comments(),
    images: ({id}) => prisma.post({id}).images(),
    categories: ({id}) => prisma.post({id}).categories()
  }
};
