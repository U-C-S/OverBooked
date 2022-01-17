import { Module } from "@nestjs/common";
import { PrismaService } from "src/services";
import { QuickAddController } from "./quickadd.controller";
// import { CatsService } from "./cats.service";

@Module({
	controllers: [QuickAddController],
	providers: [PrismaService],
})
export class QuickAddLinksModule {}
