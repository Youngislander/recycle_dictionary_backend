import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeDiscussions: async () => {
      return prisma.posts();
    }
  }
};