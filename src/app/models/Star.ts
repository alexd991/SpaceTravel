import { BasketItem } from "../basket/basket-item";
import { ICelestialBody } from "./ICelestialBody";

export class Star implements ICelestialBody, BasketItem {
    bodyId: number;
    typeId: number = 1;
    name: string = "Sun";
    diameterKm: number;
    distanceFromEarthAU: number;
    parentBodyId: number | null = null;
    description: string;
    price: number;

    constructor(bodyId: number,
        diameterKm: number,
        distanceFromEarthAU: number,
        description: string) {
            this.bodyId = bodyId;
            this.diameterKm = diameterKm;
            this.distanceFromEarthAU = distanceFromEarthAU;
            this.description = description;
            this.price = 250;
    }
    
    getBodyTypeAsString(): string {
        return "Star";
    }


}