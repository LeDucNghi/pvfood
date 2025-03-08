import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { KiotvietService } from './kiotviet.service';
import { ProductListQueryParams } from 'src/dtos/product';

@Injectable()
export class ProductService {
  constructor(private kiotvietService: KiotvietService) {}

  async getAllProduct(query: ProductListQueryParams) {
    if (!query) {
      throw new HttpException(`Something is missing!!`, HttpStatus.BAD_REQUEST);
    }
    const products = await this.kiotvietService.getAllProduct(query);
    return products;
  }

  async getProduct(id: string) {
    if (!id) {
      throw new HttpException(`Something is missing!!`, HttpStatus.BAD_REQUEST);
    }
    const product = await this.kiotvietService.findProduct(id);
    return product;
  }
}
