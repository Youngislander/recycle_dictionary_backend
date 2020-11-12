import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        uploadPost: async (_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { user } = request;
            const{ caption="", files=[], title="", hashTags="" } = args;
            const post = await prisma.createPost({ 
                caption,
                title,
                hashTags,
                user: { connect: {id: user.id } },
                isLiked: false,
                likeCount: 0,
                commentCount: 0,
                views:0
            });
            files.forEach(
                async file =>
                await prisma.createFile({
                    url: file,
                    post: {
                        connect: {
                            id: post.id
                        }
                    }
                })
            );
          return post;
        }
    }
}