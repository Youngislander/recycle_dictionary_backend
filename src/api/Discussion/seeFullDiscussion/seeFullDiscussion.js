import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: { 
      seeFullDiscussion: async(_, args) => {
        const { id } = args;
        return prisma.discussion({ id });
     }
   }
}