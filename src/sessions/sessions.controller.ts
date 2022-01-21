import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { SessionsService } from './sessions.service';

@Controller()
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create() {
    return this.sessionsService.create();
  }

  @Get(':sessionId')
  findOne(@Param('sessionId') sessionId: string) {
    return this.sessionsService.get(sessionId);
  }
}
