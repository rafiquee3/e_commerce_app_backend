import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global middleware
  // app.use(logger);
  await app.listen(3000);
}
bootstrap();
