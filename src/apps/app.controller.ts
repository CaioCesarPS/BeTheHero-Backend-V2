import { Module } from '@nestjs/common';
import NgosModule from './ngo/ngos.module';

@Module({
  imports: [NgosModule],
})
export default class AppNgoModule {}
