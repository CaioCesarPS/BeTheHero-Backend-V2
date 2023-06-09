import { Module } from '@nestjs/common';
import CreateNgoService from './create-ngo.service';
import DeleteNgoService from './delete-ngo.service';
import UpdateNgoService from './update-ngo.service';
import FindAllNgoService from './findAll-ngo.service';
import FindOneNgoService from './findOne-ngo.service';

@Module({
  providers: [
    CreateNgoService,
    DeleteNgoService,
    UpdateNgoService,
    FindAllNgoService,
    FindOneNgoService,
  ],
  exports: [
    CreateNgoService,
    DeleteNgoService,
    UpdateNgoService,
    FindAllNgoService,
    FindOneNgoService,
  ],
})
export default class NgoUseCaseModule {}
