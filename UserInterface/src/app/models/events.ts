export class Events {
  constructor(
    public _id: string,
    public name: string,
    public description: string,
    public imageLink: string,
    public category: string,
    public streetAddress: string,
    public location: string,
    public date: Date,
    public cost: number
  ) {
  }
}
