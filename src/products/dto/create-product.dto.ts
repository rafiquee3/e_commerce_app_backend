import { IsString, IsInt } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
}

export class UpdateProductDto {
  @IsString()
  name: string;
}

export class ListAllEntities {
  @IsString()
  name: string;
  limit: any;
}
