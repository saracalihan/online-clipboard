import { Table, Column, Model, HasMany, Unique, AutoIncrement, CreatedAt, DeletedAt, PrimaryKey, UpdatedAt, ForeignKey, BelongsTo, Default } from 'sequelize-typescript'
import Encryption from '../encryption'
import User from './user';

@Table
export default class Token extends Model {

  @AutoIncrement @Unique @PrimaryKey @Column
  public id: number

  @Unique @ForeignKey(()=> User) @Column
  public user_id: number

  @Column
  public value: string;

  @Column
  public expired_at: Date

  @CreatedAt @Column
  public created_at: Date

  @UpdatedAt @Column
  public updated_at: Date

  @BelongsTo(() => User)
  user: User

  generateToken(model: User): void {
    const expireDays = 10;
    const key = `token-${model.id}_${model.created_at}.${new Date()}`;
    const encryption: Encryption = new Encryption(key);
    const ex2: Date = new Date();
    ex2.setDate(ex2.getDate() + expireDays);

    this.user_id = model.id;
    this.value = encryption.hashed;
    this.expired_at = ex2;
  }

  isExpired(): boolean{
    return new Date().getTime() < this.expired_at.getTime()
  }

}