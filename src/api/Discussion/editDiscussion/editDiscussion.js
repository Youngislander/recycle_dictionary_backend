import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
    Mutation: {
        editDiscussion: async(_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const {id, caption="", title="", files=[], hashTags="", action} = args;
            const { user } = request;
            const discussion = await prisma.$exists.discussion({id, user: { id: user.id }})
            if(discussion){
                if(action === EDIT) {
                    return prisma.updateDiscussion({
                        data: { caption, title, hashTags, files },
                        where: { id }
                    });
                } else if (action === DELETE){
                    return prisma.deleteDiscussion({ id });
                }
            } else{
                throw Error("You can't do that");
            }
        }
    }
}