import { BasketItem } from "../../basket/basket-item";
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
    imageUrl: string;

    constructor(bodyId: number,
        diameterKm: number,
        distanceFromEarthAU: number,
        description: string) {
            this.bodyId = bodyId;
            this.diameterKm = diameterKm;
            this.distanceFromEarthAU = distanceFromEarthAU;
            this.description = description;
            this.price = 250;
            this.imageUrl = `http://ad41storage.blob.core.windows.net/planet-images/2k_${this.name.toLowerCase()}.jpg`;
    }
    
    getBodyTypeAsString(): string {
        return "Star";
    }


}