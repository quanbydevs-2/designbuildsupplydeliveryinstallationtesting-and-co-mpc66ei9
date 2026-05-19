import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { FarmerModule } from "./modules/farmer/farmer.module"
import { CropModule } from "./modules/crop/crop.module"
import { ProgramModule } from "./modules/program/program.module"
import { HarvestModule } from "./modules/harvest/harvest.module"
import { EquipmentModule } from "./modules/equipment/equipment.module"
import { DataPrivacyModule } from "./modules/dataprivacy/dataprivacy.module"

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FarmerModule, CropModule, ProgramModule, HarvestModule, EquipmentModule, DataPrivacyModule,
  ],
})
export class AppModule {}