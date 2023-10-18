namespace Geometria {
  export namespace Area {
    const PI = 3.14;

    export function circunferencia(area: number): number {
      return PI * Math.pow(area, 2);
    }
  }
}
