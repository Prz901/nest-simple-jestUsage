import { Module } from '@nestjs/common';
import { FruitController } from './fruit.controller';
import { FruitService } from './fruit.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [FruitController],
  providers: [FruitService, PrismaService]
})
export class FruitModule { }
