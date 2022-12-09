import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  modal: number;

  @Column()
  userId: string;

  @Column()
  imagePath: string;

  @Column()
  shopeeIsChecked: boolean;
  @Column()
  shopeeAppFee: number;
  @Column()
  shopeeProfit: number;

  @Column()
  tikTokIsChecked: boolean;
  @Column()
  tikTokAppFee: number;
  @Column()
  tikTokProfit: number;

  @Column()
  tokpedIsChecked: boolean;
  @Column()
  tokpedAppFee: number;
  @Column()
  tokpedProfit: number;
}
