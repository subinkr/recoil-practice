import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModel } from './boards/entities/board.entity';
import { UsersModule } from './users/users.module';
import { UserModel } from './users/entities/user.entity';
import { BoardsService } from './boards/boards.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'recoil',
      password: 'recoil',
      database: 'postgres',
      entities: [BoardModel, UserModel],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([BoardModel]),
    UsersModule,
    BoardsModule,
  ],
  controllers: [AppController],
  providers: [BoardsService],
})
export class AppModule {}
