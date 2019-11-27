import {generateSecret, sendSecretMail} from "../../../utils";
import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation: {
        requestSecret: async (_, args) => {
            const {email} = args;
            const loginSecret = generateSecret();
            try {
                const registeredEmail = await prisma.$exists.user({email});
                if(registeredEmail) {
                    await sendSecretMail(email, loginSecret);
                    await prisma.updateUser({
                        data: {
                            loginSecret
                        },
                        where: {
                            email
                        }
                    });
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
}