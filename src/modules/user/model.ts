import { Table, Column, Model, HasMany, Unique, AutoIncrement, CreatedAt, DeletedAt, PrimaryKey, UpdatedAt } from 'sequelize-typescript'

@Table
export default class User extends Model {

  @AutoIncrement @Unique @PrimaryKey @Column
  public id: number

  @Unique @Column
  public email: string;

  // @Column
  // public pasword_salt: string;

  // @Column
  // public pasword_hash: string;

  @CreatedAt @Column
  public createdAt: Date

  @UpdatedAt @Column
  public updatedAt: Date

  @DeletedAt @Column
  public deletedAt: Date

}