import { IsNotEmpty } from "class-validator";

export class SignupDTO {
	@IsNotEmpty()
	readonly email: string;

	@IsNotEmpty()
	readonly password: string;

	@IsNotEmpty()
	readonly name: string;
}
