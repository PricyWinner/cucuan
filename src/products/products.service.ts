import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  create(product: Product) {
    return this.productRepository.save(product);
  }

  // findAll() {
  //   return this.taskRepository.find({ relations: { user: true } });
  // }

  findOne(userId: string) {
    return this.productRepository.find({
      where: {
        userId: userId,
      },
    });
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return this.productRepository.createQueryBuilder().update().set({ firstName: "Timber", lastName: "Saw" })
  //   .where("id = :id", { id: 1 })
  //   .execute();
  // }

  remove(id: number) {
    const product = this.productRepository.find({
      where: {
        id: id,
      },
    });
    return this.productRepository.remove(product[0]);
  }
}
