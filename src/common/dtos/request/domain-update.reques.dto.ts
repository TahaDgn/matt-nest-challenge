import {
    IsNotEmpty,
    IsString,
    IsNumber,
    Min,
    IsOptional,
} from 'class-validator';


export default class DomainUpdateRequestDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    domainName: string;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    ownerId: number;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    ownerName: string;
}
