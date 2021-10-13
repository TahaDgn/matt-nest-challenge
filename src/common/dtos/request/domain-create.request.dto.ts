import {
    IsNotEmpty,
    IsString,
    IsNumber,
    Min,
} from 'class-validator';


export default class DomainCreateRequestDto {
    @IsNotEmpty()
    @IsString()
    domainName: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    ownerId: number;

    @IsNotEmpty()
    @IsString()
    ownerName: string;
}
