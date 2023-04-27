import prisma from "../../utils/prisma";

export async function getUsers() {
   return prisma.user.findMany()
}
