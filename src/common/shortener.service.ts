export class ShortenerService {
  private alphabet: string[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("") 
  private shortLink = ""

  generate(): string {
    this.shortLink = ""
    for(let i = 0; i < 5; i++) {
      this.shortLink += this.alphabet[Math.floor(Math.random() * this.alphabet.length)]
    }

    return this.shortLink
  }
}