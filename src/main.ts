import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SwaggerModule } from 'swagger-ui-express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//////////////////////////////////////////////////////////
  const config = new DocumentBuilder()
    .setTitle('BlogPessoal')
    .setDescription('Projeto do Blog Pessoal')
    .setContact('Generation Brasil', 'www.genbr.com.br', 'daniel@hotmail.com')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

   const document = SwaggerModule.createDocument(app, config)
   SwaggerModule.setup('/swagger', app, document)

  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(5000);
}
bootstrap();