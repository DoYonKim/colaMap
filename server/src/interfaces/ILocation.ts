export interface ILocation {
    _id: string;
    name: string;
    locationId: string;
    address: string;
    x: number;
    y: number;
    camp: object;
    create_date: Date;
    update_date: Date;
  }