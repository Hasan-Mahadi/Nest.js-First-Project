import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  id:string;


  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
