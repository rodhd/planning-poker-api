import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SessionDocument = Session & Document;

@Schema()
export class Session {
  @Prop({ unique: true })
  sessionId: string;

  @Prop()
  startTs: Date;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
