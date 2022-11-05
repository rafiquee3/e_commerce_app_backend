import { Module, Global } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
// to provide a set of providers which should be available everywhere out-of-the-box (e.g., helpers, database connections, etc.)
//@Global() //imports array is generally the preferred way to make the module's API available to consumers.
@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
// A module class can inject providers as well (e.g., for configuration purposes):
export class ProductsModule {
  constructor(private productsService: ProductsService) {}
}
