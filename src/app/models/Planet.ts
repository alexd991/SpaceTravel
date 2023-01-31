import { BasketItem } from "../basket/basket-item";
import { ICelestialBody } from "./ICelestialBody";

export class Planet implements ICelestialBody, BasketItem {
    bodyId: number;
    typeId: number = 2;
    name: string;
    diameterKm: number;
    distanceFromEarthAU: number;
    parentBodyId: number = 1;
    description: string;
    price: number;

    constructor(bodyId: number,
        name: string,
        diameterKm: number,
        distanceFromEarthAU: number,
        description: string) {
            this.bodyId = bodyId;
            this.name = name;
            this.diameterKm = diameterKm;
            this.distanceFromEarthAU = distanceFromEarthAU;
            this.description = description;
            this.price = 100;
    }
    
    getBodyTypeAsString(): string {
        return "Planet";
    }
}