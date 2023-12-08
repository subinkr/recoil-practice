import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './entities/user.entity';
import { Repository } from 'typeorm';
import { BoardModel } from 'src/boards/entities/board.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
    @InjectRepository(BoardModel)
    private boardRepository: Repository<BoardModel>,
  ) {}
  async create(type: string, createUserDto: CreateUserDto) {
    if (type === 'login') {
      const user = await this.userRepository.findOne({
        where: {
          username: createUserDto.username,
        },
      });

      if (!user.username) {
        return new BadRequestException();
      }

      return user;
    }
    const result = await this.userRepository.exist({
      where: {
        username: createUserDto.username,
      },
    });

    if (result) {
      return new BadRequestException();
    }

    return this.userRepository.save(createUserDto);
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    const boards = await this.boardRepository.find({
      where: {
        user: {
          id,
        },
      },
      order: {
        id: 'DESC',
      },
    });
    return { user, boards };
  }

  async remove(id: number) {
    return this.userRepository.delete(id);
  }
}
