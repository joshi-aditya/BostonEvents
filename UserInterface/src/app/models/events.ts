class Events {
  constructor(
    public id: number,
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
