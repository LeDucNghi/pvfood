import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductListQueryParams } from 'src/dtos/product';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @HttpCode(HttpStatus.OK)
  @Get('getProductList')
  getProductList(@Query() query: ProductListQueryParams) {
    return this.productService.getAllProduct(query);
  }

  @HttpCode(HttpStatus.OK)
  @Get('getProduct/:id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }
}
