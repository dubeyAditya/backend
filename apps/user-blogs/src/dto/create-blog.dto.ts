import { IsString, IsNotEmpty } from 'class-validator';

export class Blog {
    @IsString() @IsNotEmpty()
    tital: string;

    @IsString() @IsNotEmpty()
    body: string;
}