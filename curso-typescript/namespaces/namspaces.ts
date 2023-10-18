// /<reference path='geometriaCirc.ts'/>
// /<reference path='geometriaRet.ts'/>
namespace Areas {
  const PI = 3.14;

  export function circunferencia(area: number): number {
    return PI * Math.pow(area, 2);
  }

  export function retangulo(base: number, altura: number): number {
    return base * altura;
  }
}
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(2, 6));
// namespace Geometria {
//   export namespace Area {
//     const PI = 3.14;

//     export function circunferencia(area: number): number {
//       return PI * Math.pow(area, 2);
//     }

//     export function retangulo(base: number, altura: number): number {
//       return base * altura;
//     }
//   }
// }
console.log(Geometria.Area.circunferencia(27));
console.log(Geometria.Area.retangulo(3, 12));
