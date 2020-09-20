import { prisma } from "../../../generated/prisma-client";

export default {
    User: {
      posts: ({ id }) => prisma.user({ id }).posts(),
      postsCount: ({ id }) =>
      prisma
        .postsConnection({ where: { user: { id } } })
        .aggregate()
        .count(),
      likes: ({ id }) => prisma.user({ id }).likes(),
      comments: ({ id }) => prisma.user({ id }).comments(),
      commentsCount: ({ id }) =>
      prisma
        .commentsConnection({ where: { user: { id } } })
        .aggregate()
        .count(),
      discussions: ({ id }) => prisma.user({ id }).discussions(),
      discussionsCount: ({ id }) =>
      prisma
        .discussionsConnection({ where: { user: { id } } })
        .aggregate()
        .count(),
      fullName: parent => {
            return `${parent.firstName} ${parent.lastName}`
        },
      isSelf: (parent, _, { request }) =>{
          const { user } = request;
          const { id: parentId } = parent;
          return user.id === parentId;
      } 
   }
}