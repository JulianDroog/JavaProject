export class FavoriteCar {
    id: number;
    carId: string;
    userId: string;
    make: string;
    model: string;
    type: string;
    year: number;
    
    constructor(carId: string, userId: string, make: string, model: string, type: string, year: number) {
        this.carId = carId;
        this.userId = userId;
        this.make = make;
        this.model = model;
        this.type = type;
        this.year = year;
     }
}
