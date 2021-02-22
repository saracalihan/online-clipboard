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

  generateToken(user: User): void {
    const expireDays = 10;
    const key = `token-${user.id}_${user.email}.${new Date()}`;
    const encryption: Encryption = new Encryption(key);
    const now: Date = new Date();
    now.setDate(now.getDate() + expireDays);

    this.user_id = user.id;
    this.value = encryption.hashed;
    this.expired_at = now;
  }

  isExpired(): boolean{
    return new Date().getTime() < this.expired_at.getTime()
  }

}