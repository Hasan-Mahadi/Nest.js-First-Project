// src/logger.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[Logger] ${req.method} - ${req.originalUrl}`);
    next(); // পরবর্তী middleware বা controller call করার জন্য
  }
}
