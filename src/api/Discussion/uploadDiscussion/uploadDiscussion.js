import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        uploadDiscussion: async (_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { user } = request;
            const{ caption="", files=[], location="", hashTags="" } = args;
            const discussion = await prisma.createDiscussion({ 
                caption,
                location,
                hashTags,
                user: { connect: {id: user.id } },
                isLiked: false,
                likeCount: 0,
                commentCount: 0
            });
            files.forEach(
                async file =>
                await prisma.createFile({
                    url: file,
                    discussion: {
                        connect: {
                            id: discussion.id
                        }
                    }
                })
            );
          return discussion;
        }
    }
}