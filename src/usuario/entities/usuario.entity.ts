import { IsNotEmpty } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'tb_usuarios'})
export class Usuario {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @Column({length: 120, nullable: false})
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @Column({length: 30, nullable: false})
    @ApiProperty()
    nickname: string;

    @IsNotEmpty()
    @Column({length: 120, nullable: false})
    @ApiProperty()
    usuario: string; //email

    @IsNotEmpty()
    @Column({length: 120, nullable: false})
    @ApiProperty()
    password: string;

    @Column({length: 5000, nullable: true})
    @ApiProperty()
    photo: string;

    @ApiProperty()
    @OneToMany(() => Postagem, (Postagem) => Postagem.usuario)
    postagem: Postagem[];
}