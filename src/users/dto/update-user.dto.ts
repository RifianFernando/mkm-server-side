import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // This class will inherit all properties from CreateUserDto
    // and make them optional, allowing partial updates.
    // No additional properties are needed here.
}
