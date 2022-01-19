import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { JWT_SECRET } from "src/constants";
import { PrismaService } from "src/services";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

// maybe need to add prismaservice here
@Module({
	imports: [
		PassportModule,
		JwtModule.register({
			secret: JWT_SECRET,
			signOptions: { expiresIn: "1w" },
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, PrismaService],
})
export default class AuthModule {}
