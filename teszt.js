import { masodfokuEgyenletMegoldasa } from "./main.js";
const tesztLista = [
    {
        eset_szam:0,
        a: 70,
        b : 419,
        c :-1,
        vart1: 0.0023856839995939285,
        vart2: -5.98809996971388

    },
    {
        eset_szam:1,
        a: 99,
        b : 94,
        c :6,
        vart1:-0.0688175495472703,
        vart2:-0.8806773999476792

    },
    {
        eset_szam:2,
        a: 8935925,
        b : 2169936,
        c :6,
        vart1:-0.0000027650899941655334,
        vart2:-0.24283006978720095

    },
    {
        eset_szam:3,
        a: 2030,
        b : 2110,
        c :23,
        vart1:-0.011017251689392691,
        vart2:-1.0283916153056811

    },
    {
        eset_szam:4,
        a:2726 ,
        b :5786 ,
        c :1932,
        vart1:-0.4150838302436245,
        vart2:-1.707440014217124

    },
    {
        eset_szam:5,
        a:10 ,
        b :155,
        c :100,
        vart1:-0.6745141509575475,
        vart2:-14.825485849042451

    },
    {
        eset_szam:6,
        a:0 ,
        b :155,
        c :14.825485849042451,
        vart1:"Az A nem lehet 0!",
        vart2:"Az A nem lehet 0!"

    },
    {
        eset_szam: 7,
        a:307 ,
        b :236 ,
        c :15 ,
        vart1:-0.0699186717986884 ,
        vart2:-0.6988109698951227

    },
    {
        eset_szam: 8,
        a:1 ,
        b : 1,
        c : 1,
        vart1:"Nincs valós megoldása az egyenletnek" ,
        vart2:"Nincs valós megoldása az egyenletnek"

    },
    {
        eset_szam: 9,
        a: 0 ,
        b : 0,
        c : 0,
        vart1:"Az A nem lehet 0!" ,
        vart2: "Az A nem lehet 0!" 

    },
]
export function masodfokuEgyenletMegoldasaTeszt (){
    tesztLista.forEach((elem,id) => {
        let tesztA = tesztLista[id].a
        let tesztB = tesztLista[id].b
        let tesztC = tesztLista[id].c
        let tesztVart1 = tesztLista[id].vart1
        let tesztVart2 = tesztLista[id].vart2
        let eredmeny1 = masodfokuEgyenletMegoldasa(tesztA,tesztB,tesztC).X1
        let eredmeny2 = masodfokuEgyenletMegoldasa(tesztA,tesztB,tesztC).X2
        console.assert(tesztVart1 === eredmeny1, "%o" ,`${tesztLista[id].eset_szam}.eset X1, Várt eredmény = ${tesztVart1}, kapott eredmény = ${eredmeny1}`)
        console.assert(tesztVart2 === eredmeny2, "%o" ,`${tesztLista[id].eset_szam}.eset X2, Várt eredmény = ${tesztVart2}, kapott eredmény = ${eredmeny2}`)

    });
}