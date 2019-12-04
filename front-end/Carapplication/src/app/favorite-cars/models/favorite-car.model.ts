export class FavoriteCar {
    id: number;
    carId: string;
    userId: string;
    make: string;
    model: string;
    
    constructor(carId: string, userId: string, make: string, model: string) {
        this.carId = carId;
        this.userId = userId;
        this.make = make;
        this.model = model;
     }
}
