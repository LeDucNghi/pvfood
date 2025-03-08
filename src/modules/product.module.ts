import { Inventory, InventorySchema } from 'src/schemas/inventory.schema';
import { Product, ProductSchema } from 'src/schemas/product.schema';

import { HttpModule } from '@nestjs/axios';
import { KiotvietModule } from './kiotviet.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from 'src/controllers';
import { ProductService } from 'src/services';

@Module({
  imports: [
    KiotvietModule,
    HttpModule,
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Inventory.name, schema: InventorySchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
