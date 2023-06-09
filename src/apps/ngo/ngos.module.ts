import { Module } from '@nestjs/common';
import NgosController from './controller/ngos.controller';
import NgoUseCaseModule from 'src/libs/modules/ngo/useCase/ngo.useCase.module';

@Module({
  imports: [NgoUseCaseModule],
  controllers: [NgosController],
})
export default class NgosModule {}
