import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type PlayerDocument = Player & Document;

@Schema()
export class Player {
  @ApiProperty()
  @Prop({ unique: true })
  playerId: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop({ index: true })
  currentSessionId: string;

  @ApiProperty()
  @Prop()
  isSessionAdmin: boolean;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
