import { IsString, IsNotEmpty } from 'class-validator';

export class UserBlogsDto {
    @IsString() @IsNotEmpty()
    tital: string;

    @IsString() @IsNotEmpty()
    body: string;

    @IsString() @IsNotEmpty()
    userId: string;

    date: string;
}