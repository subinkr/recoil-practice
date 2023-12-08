import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards/boards.service';

@Controller()
export class AppController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getBoards() {
    return this.boardService.findAll();
  }
}
