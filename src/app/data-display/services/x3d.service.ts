import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class X3DService {

  public x3d: any;

  constructor() {
    this.x3d = (<any>window).x3dom;
  }

  public get x3dHasLoaded(): boolean {
    return !!this.x3d;
  }

  public get x3dHasCanvases(): boolean {
    return this.x3d.canvases.length > 0;
  }

  reloadX3D() {
    this.x3d.reload();
  }


}
