import { series } from "./series";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  for (let serie of series){
    await prisma.serie.create({
      data: serie
    })
  }
}

main()
