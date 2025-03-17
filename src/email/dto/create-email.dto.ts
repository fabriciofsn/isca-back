import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateEmailDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: 'O email fornecido não é valido.',
  })
  email: string;
}
