import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";

@Entity({name: 'tb_usuarios'})
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty({ example: "email@email.com"})
    @IsEmail()
    usuario: string //email

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    @ApiProperty()
    senha: string

    @Column({length: 5000})
    @ApiProperty()
    foto: string

    @ApiProperty({type: () => Postagem})
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]
}
