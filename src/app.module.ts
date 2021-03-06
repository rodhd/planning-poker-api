import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { routes } from './routes';
import { SessionsModule } from './sessions/sessions.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    SessionsModule,
    RouterModule.register(routes),
    PlayersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
