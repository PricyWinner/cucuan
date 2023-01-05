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

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

  // @Post()
  // @UseInterceptors(
  //   FileInterceptor('files', {
  //     storage: diskStorage({
  //       destination: './uploads/',
  //       filename: (req, file, cb) => {
  //         let extension = '';

  //         switch (file.mimetype) {
  //           case 'image/png': {
  //             extension = '.png';
  //           }
  //         }
  //         console.log(req);

  //         cb(null, (req.body['product'] as Product).id + extension);
  //       },
  //     }),
  //     //   fileFilter: imageFileFilter,
  //   }),
  // )
  // create(@Body() product: Product, @UploadedFile() file: Express.Multer.File) {
  //   product.imagePath = file.filename;
  //   return this.productsService.create(product);
  // }
}
