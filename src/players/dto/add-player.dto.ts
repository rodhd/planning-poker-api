import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class AddPlayerDto {
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly sessionId: string;

  @IsBoolean()
  @ApiProperty()
  readonly isSessionAdmin: boolean;
}
