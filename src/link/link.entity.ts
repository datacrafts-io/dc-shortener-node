import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "links" })
export class LinkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  fullLink: string;
  
  @Column({ unique: true, nullable: false })
  shortLink: string;
}