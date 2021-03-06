import { Module } from "@nestjs/common"
import { LinkController } from "~/link/link.controller"
import { LinkService } from "~/link/link.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { LinkEntity } from "~/link/link.entity"

@Module({
  imports: [
    TypeOrmModule.forFeature([LinkEntity])
  ],
  controllers: [LinkController],
  providers: [LinkService]
})
export class LinkModule {}
