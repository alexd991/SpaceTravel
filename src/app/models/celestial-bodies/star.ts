import { ICelestialBody } from "./ICelestialBody";

export class Star implements ICelestialBody {
    bodyId: number;
    typeId: number = 1;
    name: string = "Sun";
    diameterKm: number;
    distanceFromEarthAU: number;
    parentBodyId: number | null = null;
    description: string;

    constructor(bodyId: number,
        diameterKm: number,
        distanceFromEarthAU: number,
        description: string) {
            this.bodyId = bodyId;
            this.diameterKm = diameterKm;
            this.distanceFromEarthAU = distanceFromEarthAU;
            this.description = description;
    }
    
    getBodyTypeAsString(): string {
        return "Star";
    }


}