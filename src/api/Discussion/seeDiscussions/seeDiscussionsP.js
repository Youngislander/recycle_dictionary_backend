import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeDiscussionsP: async () => {
      return prisma.discussions({ orderBy: 'views_DESC' });
    }
  }
};