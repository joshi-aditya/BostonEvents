class Events {
  constructor(
    private id: number,
    private description: string,
    private imageSrc: string,
    private category: string,
    private streetAddress: string,
    private location: string,
    private date: Date,
    private cost: number
  ) {
  }
}
