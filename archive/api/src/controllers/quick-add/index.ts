import { Module } from "@nestjs/common";
import { PrismaService } from "src/services";
import { QuickAddController } from "./quickadd.controller";
import { QuickAddService } from "./quickadd.service";

@Module({
	controllers: [QuickAddController],
	providers: [PrismaService, QuickAddService],
})
export class QuickAddLinksModule {}
