import {
  KiotVietToken,
  KiotVietTokenSchema,
} from 'src/schemas/kiotviet-token.schema';

import { HttpModule } from '@nestjs/axios';
import { KiotvietService } from 'src/services';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: KiotVietToken.name, schema: KiotVietTokenSchema },
    ]),
  ],
  providers: [KiotvietService],
  exports: [KiotvietService],
})
export class KiotvietModule {}
