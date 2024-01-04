import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { FruitService } from './fruit.service';
import { CreateFruitDto } from 'src/dtos/Fruit/createFruit.dto';

@Controller('fruit')
export class FruitController {
  constructor(private readonly fruitService: FruitService) { }

  @Get()
  async findAll() {
    return await this.fruitService.find()
  }

  @Get(":id")
  async findFruit(@Param('id') id: string) {
    return await this.fruitService.show(id)
  }

  @Post()
  async create(@Body() createFruit: CreateFruitDto) {
    return await this.fruitService.create(createFruit)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFruit: CreateFruitDto) {
    return await this.fruitService.update(id, updateFruit)
  }

  @Delete(":id")
  async delete(@Param('id') id: string) {
    return await this.fruitService.delete(id)
  }
}
