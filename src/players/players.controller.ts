import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AddPlayerDto } from 'src/players/dto/add-player.dto';
import { PlayersService } from './players.service';
import { Player } from './schemas/player.schema';

@ApiTags('players')
@Controller()
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Player was created',
    type: Player,
  })
  add(@Body() addPlayerDto: AddPlayerDto): Promise<Player> {
    return this.playersService.add(addPlayerDto);
  }

  @Delete(':playerId')
  @ApiResponse({
    status: 202,
    description: 'Remove player',
    type: Player,
  })
  remove(@Param('playerId') playerId: string): Promise<Player> {
    return this.playersService.remove(playerId);
  }

  @Get(':sessionId')
  @ApiOkResponse({
    type: [Player],
  })
  getAllPlayers(@Param('sessionId') sessionId: string): Promise<Player[]> {
    return this.playersService.getAllPlayers(sessionId);
  }
}
