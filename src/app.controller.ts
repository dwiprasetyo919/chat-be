import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiExcludeEndpoint()
  @Get('api/v1/ping')
  getPing(): string {
    return this.appService.getPing();
  }
}
