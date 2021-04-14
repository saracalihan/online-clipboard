import * as crypto from 'crypto';

export default class Encryption {
  public hashed: string;

  public saltLength = 10;

  public salt: string;

  private text?: string;

  private secret: string = process.env.SECRET_KEY || 'UjXn2r5u8x!A%D*G-KaPdSgVkYp3s6v9';

  private cryptAlgorithm = 'sha512';

  constructor(text?: string, salt?: string, saltLength?: number) {
    console.log(this.secret);
    this.saltLength = saltLength || this.saltLength;
    this.text = text;
    this.salt = salt || this.generateSalt(this.saltLength);
    this.hashed = this.hash();
  }

  generateSalt(length: number): string {
    return crypto
      .randomBytes(Math.ceil(length / 2))
      .toString('hex')
      .slice(0, length);
  }

  hash(): string {
    const hashed = crypto.createHmac(this.cryptAlgorithm, this.salt);
    hashed.update(this.text);
    this.hashed = hashed.digest('hex');

    return this.hashed;
  }

  encrypt = (data, cryptType = 'sha256', secret = this.secret) => (
    crypto.createHmac(cryptType, secret)
      .update(data)
      .digest('hex')
  );
}