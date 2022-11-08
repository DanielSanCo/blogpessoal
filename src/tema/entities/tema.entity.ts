import { Postagem } from "../../postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

//12
@Entity({ name: "tb_temas" })
export class Tema {
    @PrimaryGeneratedColumn() 
    @ApiProperty()   
    id: number;

    @Column({length: 120, nullable: false}) 
    @ApiProperty()   
    educacao: string;
    
    @Column({length: 255, nullable: false})
    @ApiProperty()
    serie: string;

    @ApiProperty()
    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
}