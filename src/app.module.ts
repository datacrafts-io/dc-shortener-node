import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"

import { LinkModule } from "~/link/link.module"

@Module({
  imports: [
    LinkModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot()
  ]
})

export class AppModule {}
