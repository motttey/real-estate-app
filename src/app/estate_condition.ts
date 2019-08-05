export class Estate_Condition {

  constructor(
    public rent_max: number,
    public rent_min: number,
    public area_max: number,
    public area_min: number,

    public age: string,
    public distance: string,

    public room_types: string[],
    // public floor_plans: string[],
    public rent_options: string[],
    public structures: string[],
    public options: string[],
  ) {
    this.rent_max = rent_max;
    this.rent_min = rent_min;
    this.area_max = area_max;
    this.area_min = area_min;

    this.age = age;
    this.distance = distance;
    this.room_types = room_types;
    // this.floor_plans = floor_plans;
    this.rent_options = rent_options;
    this.structures = structures;
    this.options = options;
  }
}
