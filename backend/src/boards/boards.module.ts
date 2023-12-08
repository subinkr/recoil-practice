import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModel } from './entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoardModel])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
