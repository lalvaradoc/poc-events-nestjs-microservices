import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoreApiService } from './core-api.service';

@Controller('/events')
export class CoreApiController {
  constructor(private readonly coreApiService: CoreApiService) {}

  @Post()
  getHello(@Body() input: any): string {
    return this.coreApiService.getHello(input);
  }
}
