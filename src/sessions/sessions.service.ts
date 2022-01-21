import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { Session, SessionDocument } from './schemas/session.schema';

@Injectable()
export class SessionsService {
  constructor(
    @InjectModel(Session.name)
    private readonly sessionModel: Model<SessionDocument>,
  ) {}

  async create(): Promise<Session> {
    const createdSession = new this.sessionModel({
      id: nanoid(8),
      startTs: new Date(),
    });
    return createdSession.save();
  }

  async get(sessionId: string): Promise<Session> {
    const session = this.sessionModel.findOne({ sessionId: sessionId });
    return session;
  }
}
