export class Estate_Condition {

  constructor(
    public age: string,
    public distance: string,
    public floor_plans: string[],
    public structure: string[],
    public options: string[],
  ) {
    this.age = "none";
    this.distance = "none";
    this.floor_plans = [];
    this.structure = [];
    this.options = [];
  }
}
