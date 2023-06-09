import { Controller, Inject, Post } from '@nestjs/common';
import { Ngo } from 'src/libs/modules';


@Controller('ngos')
export default class NgosController {
  constructor(

  ) {}

  @Post()
  async create() {
    const ngo = new Ngo(
      '1',
      'Ngo 1',
      'caio@gmail.com',
      '+5531999999999',
      'Rua 1',
      'MG',
    );
    await this.ngoGateway.(ngo);
  }
}
