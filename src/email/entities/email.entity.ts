import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Email {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  email: string;

  constructor(email: Email) {
    Object.assign(this, email);
  }
}
