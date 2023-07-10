import { IsEmail, IsNotEmpty, IsString,IsUrl } from 'class-validator';

// Purpose of dto to validat the User request 
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  username: string;

  @IsString()
  @IsUrl()
  profileImage: string;
 
  @IsString()
  @IsNotEmpty()
  userId: string;

}
