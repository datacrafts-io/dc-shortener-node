import { Controller, Get, Post, Delete, Body, Param, Req, Request } from "@nestjs/common"
import { LinkService } from "~/link/link.service"
import { LinkEntity } from "~/link/link.entity"
import { ShortenerService } from "~/common/shortener.service"

@Controller()
export class LinkController {
  private shortenerService: ShortenerService

  constructor(private linksService: LinkService) {
    this.shortenerService = new ShortenerService()
  }

  @Get("all")
  async index(): Promise<LinkEntity[]> {
    return await this.linksService.findAll()
  }

  @Get(":link")
  show(@Param("link") shortLink: string): Promise<LinkEntity> {
    return this.linksService.find(shortLink)
  }

  @Post()
  async create(@Req() req: Request, @Body("link") fullLink: string): Promise<any> {
    const shortLink = this.shortenerService.generate()
    const entityData = { id: undefined, fullLink, shortLink }
    return this.linksService.create(entityData)
  }

  @Delete(":link")
  async delete(@Param("link") shortLink: string): Promise<any> {
    return this.linksService.delete(shortLink)
  }  
}