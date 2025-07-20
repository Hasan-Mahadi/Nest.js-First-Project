import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
// import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // পুরো অ্যাপে globally config ব্যবহার করা যাবে
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    UsersModule,

    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   validationSchema: Joi.object({
    //     //এটা ensure করবে .env এ প্রয়োজনীয় variables আছে কিনা।
    //     PORT: Joi.number().default(3000),
    //     DB_USER: Joi.string().required(),
    //     DB_PASS: Joi.string().required(),
    //     DB_NAME: Joi.string().required(),
    //   }),
    // }),
  ],

  controllers: [
    AppController,
    HelloController,
    UserController,
    ProductController,
  ],
  providers: [AppService, HelloService, UserService, ProductService],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // সব route এ ব্যবহার হবে
  }
}
