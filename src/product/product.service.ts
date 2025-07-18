

import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  private products: CreateProductDto[]=[];

  create(productData: CreateProductDto){
    this.products.push(productData);
    return{
      messeage: 'Product created successfully!',
      data:productData,
    };
  }

  findAll() {
    return this.products;
  }
}
