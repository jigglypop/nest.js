import { IsDateString, Length } from "class-validator";

export class CreateEventDto {
    @Length(5, 255, { 
        message: "이름의 길이가 맞지 않습니다."
    })
    name: string;
    @Length(5, 255, { 
        message: "설명의 길이가 맞지 않습니다."
    })
    description: string;
    @IsDateString()
    when: string;
    @Length(5, 255, { 
        message: "주소의 길이가 맞지 않습니다."
    })
    address: string;
}