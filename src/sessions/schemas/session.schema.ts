import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type SessionDocument = Session & Document;

@Schema()
export class Session {
  @ApiProperty()
  @Prop({ unique: true })
  sessionId: string;

  @ApiProperty()
  @Prop()
  startTs: Date;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
