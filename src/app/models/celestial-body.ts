export interface CelestialBody {
    bodyId: number;
    typeId: number;
    name: string;
    diameterKm: number;
    distanceFromEarthAU: number;
    parentBodyId: number | null;
    description: string | null;
}