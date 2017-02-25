import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { DeleteResult } from "typeorm"
import { LinkEntity } from "~/link/link.entity"

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(LinkEntity)
    private linkRepository: Repository<LinkEntity>
  ) {}

  async findAll(): Promise<LinkEntity[]> {
    return await this.linkRepository.find()
  }

  async find(shortLink: string): Promise<LinkEntity> {
    return await this.linkRepository.findOneOrFail({ shortLink })
  }

  async create(entity: LinkEntity): Promise<LinkEntity> {
    const existing = await this.linkRepository.findOne({ fullLink: entity.fullLink })
    if (existing !== undefined) return existing

    return await this.linkRepository.save(entity)
  }

  async delete(shortLink: string): Promise<DeleteResult> {
    return await this.linkRepository.delete({ shortLink })
  }
}