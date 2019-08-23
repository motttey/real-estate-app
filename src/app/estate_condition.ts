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
    public position_options: string[],
    public kitchen_options: string[],
    public bus_toilet_options: string[],
    public parking_options: string[],
    public surrounding_environment_options: string[],

    public other_options: string[],

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

    this.kitchen_options = kitchen_options;
    this.position_options = position_options;
    this.bus_toilet_options = bus_toilet_options;
    this.parking_options = parking_options;
    this.surrounding_environment_options = surrounding_environment_options;
    this.other_options = other_options;
  }
}
