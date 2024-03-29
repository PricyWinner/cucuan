import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() product: Product) {
    return this.productsService.create(product);
  }

  // @Get()
  // findAll() {
  //   return this.productsService.findAll();
  // }

  @Get(':userId')
  findOne(@Param('userId') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id/')
  update(@Param('id') id: number, @Body() product: Product) {
    return this.productsService.update(id, product);
  }

  @Delete()
  remove(@Body() product: Product) {
    return this.productsService.remove(product);
  }
  // @Delete(':id')
  // remove2(@Param('id') id: number) {
  //   return this.productsService.remove2(id);
  // }
}
