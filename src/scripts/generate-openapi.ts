import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { AppModule } from '../app.module';

async function generateOpenAPISchema() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('API for managing users')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const outputPath = join(__dirname, '../openapi.json');
  writeFileSync(outputPath, JSON.stringify(document, null, 2));
  console.log(`OpenAPI schema generated at ${outputPath}`);
  process.exit(0);
}

generateOpenAPISchema();
