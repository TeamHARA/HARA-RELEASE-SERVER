import { userCreateDTO } from "../interfaces/userDTO";
import prisma from "./prismaClient";


const findUserById = async (userId: number) => {
    return await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
};

const createUser = async(userCreateDTO:userCreateDTO) => {
    return await prisma.user.create({
        data:{
            name: userCreateDTO.name
            // email: userCreateDTO.email
        }
    })
}

// ? class로 사용하는 경우는 언제 ?
// export class userRepository{
//     findUserById = async (userId: number) => {
//         return await prisma.user.findUnique({
//             where: {
//                 id: userId
//             }
//         });
//     };

//     createUserbyName = async(userName: string) => {
//         return await prisma.user.create({
//             data:{
//                 name: userName
//             }
//         })
//     }
// }

export default { findUserById,createUser };