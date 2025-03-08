import { Order, OrderSchema } from 'src/schemas';

import { KiotvietModule } from './kiotviet.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from 'src/controllers';
import { OrderService } from 'src/services';

@Module({
  imports: [
    KiotvietModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
