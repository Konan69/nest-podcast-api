import { Controller, Get } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll() {
    return 'This action returns all episodes';
  }
}
