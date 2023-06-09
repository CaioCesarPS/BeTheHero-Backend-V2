import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import AppNgoModule from './apps/app.controller';

@Module({
  imports: [AppNgoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
