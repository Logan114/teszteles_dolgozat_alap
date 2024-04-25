import { masodfokuEgyenletMegoldasaTeszt } from "./teszt.js";

console.log(masodfokuEgyenletMegoldasa(1, 2, 1));
masodfokuEgyenletMegoldasaTeszt();
// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

export function masodfokuEgyenletMegoldasa(a, b, c) {
  if (a == 0) {
    const eredmeny = {
      X1: "Az A nem lehet 0!",
      X2: "Az A nem lehet 0!",
    };
    return eredmeny;
  }
  if (a == b == c) {
    const eredmeny = {
      X1: "Nincs valós megoldása az egyenletnek",
      X2: "Nincs valós megoldása az egyenletnek",
    };
    return eredmeny
  } else {
    let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    const eredmeny = {
      X1: x1,
      X2: x2,
    };
    console.log(eredmeny);
    return eredmeny;
  }
}
