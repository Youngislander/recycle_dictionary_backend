import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFeed: async () => {
      return prisma.posts({ orderBy: 'views_DESC' });
    }
  }
};