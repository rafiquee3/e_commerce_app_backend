import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
//import { LoggerMiddleware } from './logger.middleware';
import { loggerMiddleware } from './logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(LoggerMiddleware)
      // .exclude(
      //   { path: 'products', method: RequestMethod.GET },
      //   { path: 'products', method: RequestMethod.POST },
      //   'products/(.*)',
      // )
      // .forRoutes(ProductsController);
      .apply(loggerMiddleware)
      .forRoutes(ProductsController);
    // many middleware
    // consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
  }
}
