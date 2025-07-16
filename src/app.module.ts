import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloController, UserController],
  providers: [AppService, HelloService],
})
export class AppModule {}
