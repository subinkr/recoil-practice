import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardModel } from './entities/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardModel)
    private boardRepository: Repository<BoardModel>,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    return this.boardRepository.save(createBoardDto);
  }

  async findAll() {
    const boardList = await this.boardRepository.find({
      order: {
        id: 'DESC',
      },
    });
    return boardList;
  }

  async findOne(id: number) {
    const board = await this.boardRepository.findOne({
      where: {
        id,
      },
    });
    return board;
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.boardRepository.update(id, updateBoardDto);
  }

  async remove(id: number) {
    return this.boardRepository.delete(id);
  }
}
