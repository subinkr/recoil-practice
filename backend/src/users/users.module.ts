import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { BoardModel } from 'src/boards/entities/board.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel, BoardModel])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
