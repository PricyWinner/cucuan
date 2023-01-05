import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getMongoRepository, Repository } from 'typeorm';
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
  remove(product: Product) {
    // const product = this.productRepository.findOne({
    //   where: {
    //     id: id,
    //   },
    // });
    return this.productRepository.delete(product);
  }
  // remove2(id: number) {
  //   const product = this.productRepository.findOne({
  //     where: {
  //       id: id,
  //     },
  //   });
  //   return this.productRepository.update(product).set({ name: 'alex' });
  // }

  update(id, newproduct: Product) {
    // const id = newproduct.id;
    console.log(id);

    const updateRepo = this.productRepository
      .createQueryBuilder()
      .update(Product)
      .set(newproduct)
      .where('id = :id', { id: id })
      .execute();
    return updateRepo;
  }
}
