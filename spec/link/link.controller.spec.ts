import { ConfigModule } from "@nestjs/config"
import { Test } from "@nestjs/testing"
import { TypeOrmModule } from "@nestjs/typeorm"

import { LinkController } from "~/link/link.controller"
import { LinkEntity } from "~/link/link.entity"
import { LinkService } from "~/link/link.service"

describe("LinkController", () => {
  let controller: LinkController
  let service: LinkService

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature([LinkEntity])
      ],
      controllers: [LinkController],
      providers: [LinkService]
    }).compile()

    controller = app.get<LinkController>(LinkController)
    service = app.get<LinkService>(LinkService)

    const result = [{ id: 1, fullLink: "fullLink", shortLink: "shortLink" }]
    jest.spyOn(service, "findAll").mockImplementation(() => new Promise(resolve => resolve(result)))
  })

  describe("#index", () => {
    it("should return empty collection", () => {
      expect(controller.index()).toBe([])
    })
  })
})
