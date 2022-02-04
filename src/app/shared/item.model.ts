export class Item {

  constructor(
    public name: string,
    public description: string,
    public price: number,
    public qty: number,
    ) {}
}
// a shortcut was used for this class; instead of defining the variables
// "name" and "string" before the constructor, it was declared in the
// constructor instead
