

import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService){}


  @Post('create')
  @UsePipes(new ValidationPipe())
  createProduct(@Body() CreateProductDto: CreateProductDto){
   return this.productService.create(CreateProductDto);
  }

  @Get()
  findAllProducts(){
    return this.productService.findAll();
  }
}
