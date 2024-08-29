import { NestFactory } from '@nestjs/core';
import { CreateVendedorModule } from './vendedor/create-vendedor.module';

async function bootstrap() {
  const app = await NestFactory.create(CreateVendedorModule);
  await app.listen(3000);
}
bootstrap();
