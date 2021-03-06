import {
  Model,
  AutoIncrement,
  Column,
  CreatedAt,
  NotEmpty,
  NotNull,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
  Default
} from "sequelize-typescript";
import User from "./user";

@Table
export default class Clipboard extends Model {

  @AutoIncrement @PrimaryKey @Unique @Column
  public id: number
  
  @Unique @Column @ForeignKey(() => User)
  public user_id: number

  @Column
  public header: string

  @Column
  public text: string

  @Column 
  public token_value: string

  @Default(false) @Column 
  public is_shared: boolean

  @CreatedAt @Column
  public created_at: Date

  @UpdatedAt @Column
  public updated_at: Date

  @BelongsTo(() => User)
  user: User

  async generateToken(){
    let length = 20;
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * 15));
    }
    this.token_value = result;
  }

  async setContent(header: string,text: string){
    this.header = header;
    this.text = text;
  }
}
