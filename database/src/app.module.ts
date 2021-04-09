import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './events/event.entity';
import { EventModule } from './events/event.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3307,
      username: 'root',
      password: 'example',
      database: 'nest-events',
      entities: [
        Event
      ],
      synchronize: true
    }),
    TypeOrmModule.forFeature([
      Event
    ]),
    EventModule
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
