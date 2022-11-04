import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly product: Product[] = [];

  create(product: Product) {
    this.product.push(product);
  }

  findAll(): Product[] {
    return this.product;
  }
}
