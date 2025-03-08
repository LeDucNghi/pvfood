import { KiotvietModule, UsersModule } from './modules';

import { AppService } from './app.service';
import { AuthModule } from './modules/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './modules/order.module';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.teidd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    ),
    KiotvietModule,
    OrderModule,
  ],
  providers: [AppService],
})
export class AppModule {}
