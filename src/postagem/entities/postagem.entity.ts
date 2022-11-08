import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_postagem"})
export class Postagem {
    @ApiProperty()  
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()  
    @IsNotEmpty()
    @Column({length: 120, nullable: false})
    titulo: string;

    @ApiProperty()  
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    conteudo: string;

    @ApiProperty()  
    @UpdateDateColumn()
    data: Date;

    @ApiProperty()  
    @Column({ nullable: true })
    curtida: number;

    @ApiProperty({ type: () => Tema })
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (Usuario) => Usuario.postagem,{
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}