import { Routes } from '@nestjs/core';
import { AppModule } from './app.module';
import { PlayersModule } from './players/players.module';
import { SessionsModule } from './sessions/sessions.module';

export const routes: Routes = [
  {
    path: 'api/v1',
    module: AppModule,
    children: [
      {
        path: '/sessions',
        module: SessionsModule,
      },
      {
        path: '/players',
        module: PlayersModule,
      },
    ],
  },
];
