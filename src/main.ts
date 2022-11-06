import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global middleware
  // app.use(logger);
  //app.useGlobalPipes(new ValidationPipe());
  //app.useGlobalGuards(new RolesGuard());
  //app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
