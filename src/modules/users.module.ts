import { User, UserSchema } from 'src/schemas/user.schema';

import { KiotvietModule } from './kiotviet.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from 'src/services';

@Module({
  imports: [
    KiotvietModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
