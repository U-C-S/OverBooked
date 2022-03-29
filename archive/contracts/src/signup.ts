import { IsEmail, IsNotEmpty } from "class-validator";

export class SignupDTO {
	@IsNotEmpty()
	@IsEmail()
	readonly email!: string;

	@IsNotEmpty()
	readonly password!: string;

	@IsNotEmpty()
	readonly name!: string;
}
