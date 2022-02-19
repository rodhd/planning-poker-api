import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { AddPlayerDto } from 'src/players/dto/add-player.dto';
import { Player, PlayerDocument } from './schemas/player.schema';

interface AddPlayerModel {
  playerId: string;
  name: string;
  sessionId: string;
  isSessionAdmin: boolean;
}

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player.name)
    private readonly playerModel: Model<PlayerDocument>,
  ) {}

  async add(addPlayerDto: AddPlayerDto): Promise<Player> {
    const model: AddPlayerModel = {
      playerId: nanoid(6),
      name: addPlayerDto.name,
      sessionId: addPlayerDto.sessionId,
      isSessionAdmin: addPlayerDto.isSessionAdmin,
    };
    const addedPlayer = await this.playerModel.create(model);
    return addedPlayer;
  }

  async remove(playerId: string): Promise<Player> {
    const removedPlayer = await this.playerModel.findOneAndRemove({
      playerId: playerId,
    });
    return removedPlayer;
  }

  async getAllPlayers(sessionId: string): Promise<Player[]> {
    const players = await this.playerModel.find({ sessionId: sessionId });
    return players;
  }
}
