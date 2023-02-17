export interface ICelestialBody {
    bodyId: number;
    typeId: number;
    name: string;
    diameterKm: number;
    distanceFromEarthAU: number;
    parentBodyId: number | null;
    description: string;
    imageUrl: string | null;

    getBodyTypeAsString() : string;
}