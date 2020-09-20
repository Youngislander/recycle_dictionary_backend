import { prisma } from "../../../generated/prisma-client";

export default {
    Discussion: {
        files: ({ id }) => prisma.discussion({ id }).files(),
        comments: ({ id }) => prisma.discussion({ id }).comments(),
        user: ({ id }) => prisma.discussion({ id }).user(),
        likes: ({ id }) => prisma.discussion({ id }).likes(),
        isLiked: async(parent, _, {request}) =>{
          const { user } = request;
          const { id } = parent;
          return prisma.$exists.like({
           AND: [
            {
             user: 
             {
              id: user.id
             }
           },
           {
             discussion: {
               id
             } 
           }
          ] 
         });
        },
        likeCount: parent => 
          prisma
          .likesConnection({
            where: {discussion: { id: parent.id
             }}
          })
          .aggregate()
          .count(),
        commentCount: parent => 
          prisma
          .commentsConnection({
            where: {discussion: { id: parent.id
              }}
          })
          .aggregate()
          .count(),
        views: ({ id }) => prisma.discussion({ id }).views()
      } 
}