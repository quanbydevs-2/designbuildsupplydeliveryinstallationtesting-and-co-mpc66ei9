import { oc } from "@orpc/contract"
import { farmerContract } from "./modules/farmer/farmer.contract.js"
import { cropContract } from "./modules/crop/crop.contract.js"
import { programContract } from "./modules/program/program.contract.js"
import { harvestContract } from "./modules/harvest/harvest.contract.js"
import { equipmentContract } from "./modules/equipment/equipment.contract.js"
import { dataprivacyContract } from "./modules/dataprivacy/dataprivacy.contract.js"

export const contract = oc.router({
  farmer: farmerContract,
  crop: cropContract,
  program: programContract,
  harvest: harvestContract,
  equipment: equipmentContract,
  dataprivacy: dataprivacyContract,
})