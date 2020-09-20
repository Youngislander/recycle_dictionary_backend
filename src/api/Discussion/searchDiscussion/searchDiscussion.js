import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        searchDiscussion: async (_, args) => 
         prisma.discussions({
             where: {
                 OR: [
                     { location_starts_with: args.term },
                     { caption_starts_with: args.term },
                     { hashTags_contains: args.term }
                 ]
             }
         })
    }
};