import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../service/postagem.service";
import { ApiTags } from "@nestjs/swagger/dist";
import { ApiBearerAuth } from "@nestjs/swagger/dist";

@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller('/postagens')
@ApiBearerAuth()
export class PostagemController{
    constructor(private readonly PostagemService: PostagemService) {}

    @Get() //localhost:4000/postagens
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.PostagemService.findAll();
    }

    @Get('/:id') //localhost:4000/postagens/id
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return this.PostagemService.findById(id)
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.PostagemService.findByTitulo(titulo)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.PostagemService.create(postagem)
    }
 
    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.PostagemService.update(postagem)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    excluir(@Param('id', ParseIntPipe) id: number){
        return this.PostagemService.excluir(id)
    }
}