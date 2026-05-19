import { Module } from "@nestjs/common"
import { DataPrivacyController } from "./dataprivacy.controller"
import { DataPrivacyService } from "./dataprivacy.service"

@Module({
  controllers: [DataPrivacyController],
  providers: [DataPrivacyService],
})
export class DataPrivacyModule {}