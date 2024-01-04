import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { createFruitParams } from 'src/utils/utils';
import { randomUUID } from 'node:crypto'


@Injectable()
export class FruitService {

  constructor(private prisma: PrismaService) { }

  async find() {
    const fruits = await this.prisma.fruit.findMany()
    return fruits
  }

  async show(id: string) {
    const fruit = await this.prisma.fruit.findUnique({
      where: {
        id
      }
    })
    return fruit
  }

  async create(createFruit: createFruitParams) {
    const fruit = await this.prisma.fruit.create({
      data: {
        id: randomUUID(),
        name: createFruit.name,
        type: createFruit.type,
        price: createFruit.price
      }
    })
    return fruit
  }

  async update(id: string, updateFruit: createFruitParams) {
    const fruit = await this.prisma.fruit.update({
      where: {
        id: id
      },
      data: {
        name: updateFruit.name,
        type: updateFruit.type,
        price: updateFruit.price
      },
    })
    return fruit
  }

  async delete(id: string) {
    const fruit = await this.prisma.fruit.delete({
      where: {
        id
      }
    })
    return fruit
  }

}
