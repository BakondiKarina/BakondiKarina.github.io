function udvozles(vezeteknev, keresztnev){
    console.log(`Kedves ${vezeteknev} ${keresztnev}, üdvözüljük!`);
}
udvozles("Kis", "Krisztina")

udvozles("Bakondi", "Karina")

udvozles("Zelei", "Barbara")

// function szorzas(a,b){
//     console.log(a * b)
// }
// szorzas(5,8)
// szorzas(324,610)

let a = 6;
let b = 2;

function szorzas(a,b){
    if(typeof a != 'number' || typeof b == 'number'){
       console.log(`Hibás paraméter ${a !== 'number' ? a : b}`)
       return;
    }
    return a * b;
}

let szamok = [3,6,12,53,86,43,934,201,53,87];

console.log(szamok[4]);

for (let index = 0; index < szamok.length; index++){
     console.log(szamok[index]);
}

for (let index = 0; index < szamok.length; index++){
    console.log(szamok[index] * 3);
}

for (let index = 0; index < szamok.length; index++){
    console.log((szamok[index] * 3)-1);
}

for (let index = 0; index < szamok.length; index++){
    if(szamok[index] % 2 != 0){
    console.log(szamok[index])
    }
}
