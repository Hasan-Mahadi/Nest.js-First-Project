import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [AppController, HelloController, UserController, ProductController],
  providers: [AppService, HelloService, UserService, ProductService],
})
export class AppModule {}
