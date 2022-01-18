import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

// maybe need to add prismaservice here
@Module({
	controllers: [AuthController],
	providers: [AuthService],
})
export default class AuthModule {}
