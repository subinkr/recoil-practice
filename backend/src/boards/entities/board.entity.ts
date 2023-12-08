import { UserModel } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BoardModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  content: string;

  @ManyToOne(() => UserModel, (user) => user.boards, {
    eager: true,
    onDelete: 'CASCADE',
  })
  user: UserModel;
}
