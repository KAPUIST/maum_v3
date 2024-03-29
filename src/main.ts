import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './httpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 4000;
  const config = new DocumentBuilder()
    .setTitle('Maum_v3')
    .setDescription('Maum Api 문서')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  console.log(`listening on port ${port}`);
  await app.listen(port);
}
bootstrap();
