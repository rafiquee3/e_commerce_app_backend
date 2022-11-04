import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {
  CreateProductDto,
  UpdateProductDto,
  ListAllEntities,
} from './products.dto';

@Controller()
export class ProductsController {
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all products (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} product`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} product`;
  }
}
