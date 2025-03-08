import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { OrderParamsPayload, OrderQueryParams } from 'src/dtos/order';

import { OrderService } from 'src/services';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @HttpCode(HttpStatus.OK)
  @Get('getOrderList')
  getOrderList(@Query() query: OrderQueryParams) {
    return this.orderService.getOrderList(query);
  }

  @HttpCode(HttpStatus.OK)
  @Get('getOrderDetail/:id')
  getOrderDetail(@Param('id') id: string) {
    return this.orderService.getOrderDetail(id);
  }

  @HttpCode(HttpStatus.OK)
  @Post('order')
  handleOrder(@Param() params: OrderParamsPayload) {
    return this.orderService.handleOrder(params);
  }
}
