

// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDbUser(): string {
    return this.configService.get<string>('DB_USER') ?? '';
  }

  getPort(): number {
    return this.configService.get<number>('PORT') ?? 0;
  }
}

