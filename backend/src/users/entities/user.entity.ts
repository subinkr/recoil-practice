import { BoardModel } from 'src/boards/entities/board.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  nickname: string;

  @OneToMany(() => BoardModel, (board) => board.user)
  boards: BoardModel[];
}
