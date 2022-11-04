import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToOne} from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({name: 'tb_postagens'})
    export class Postagem { //Criando as tabelas
        @PrimaryGeneratedColumn()
        @ApiProperty()
        id: number;

        @IsNotEmpty()
        @MaxLength(100)
        @Column({length: 100, nullable: false})
        @ApiProperty()
        titulo: string;
        
        @Column({length: 100, nullable: false})
        @ApiProperty()
        text: string;

        @UpdateDateColumn()
        @ApiProperty()
        data: Date;

        @ApiProperty({type: () => Tema})
        @ManyToOne(() => Tema, (tema) => tema.postagem, { onDelete: "CASCADE" })
        tema: Tema

        @ApiProperty({type: () => Usuario})
        @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
            onDelete: "CASCADE"
        })
        usuario: Usuario
    }