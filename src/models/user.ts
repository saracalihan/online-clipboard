import { Table, Column, Model, HasMany, Unique, AutoIncrement, CreatedAt, DeletedAt, PrimaryKey, UpdatedAt, Default } from 'sequelize-typescript'
import Encryption from '../encryption';
import Clipboard from './clipboard';
import Token from './token';

@Table
export default class User extends Model {

  @AutoIncrement @Unique @PrimaryKey @Column
  public id: number

  @Unique @Column
  public email: string;

  @Default('pas_salt') @Column
  public password_salt: string;

  @Default('pas_hash') @Column
  public password_hash: string;

  @CreatedAt @Column
  public created_at: Date

  @UpdatedAt @Column
  public updated_at: Date

  @DeletedAt @Column
  public deleted_at: Date

  @HasMany(() => Token)
  tokens: Token[]

  @HasMany(() => Clipboard)
  clipboards: Clipboard[]

  async generateToken(): Promise<Token>{
    const token = await new Token({ user_id: this.id });
    token.generateToken(this);
    await token.save();
    return token
  }

  setPassword(password: string): void {
    const encryption: Encryption = new Encryption(password);
    this.password_hash = encryption.hashed;
    this.password_salt = encryption.salt;
  }

  checkPassword(password: string): boolean {
    const encryption: Encryption = new Encryption(password, this.password_salt);

    return this.password_hash === encryption.hashed;
  }
}