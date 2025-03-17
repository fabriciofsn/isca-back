import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Email } from './entities/email.entity';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
  ) {}

  async create(createEmailDto: CreateEmailDto) {
    const email = this.emailRepository.create(createEmailDto);
    return this.emailRepository.save(email);
  }

  findAll() {
    return this.emailRepository.find();
  }
}
