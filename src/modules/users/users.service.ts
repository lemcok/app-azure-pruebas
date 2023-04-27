import prisma from "../../utils/prisma";

export async function getUsers() {
   const users:any[] = [{name: 'pedro'}]
   return users
}
