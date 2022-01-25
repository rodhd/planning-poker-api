import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Session } from './schemas/session.schema';
import { SessionsService } from './sessions.service';

@ApiTags('sessions')
@Controller()
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Session was created',
    type: Session,
  })
  create(): Promise<Session> {
    return this.sessionsService.create();
  }

  @Get(':sessionId')
  @ApiOkResponse({
    type: Session,
  })
  findOne(@Param('sessionId') sessionId: string): Promise<Session> {
    return this.sessionsService.get(sessionId);
  }
}
