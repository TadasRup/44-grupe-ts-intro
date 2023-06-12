"use strict";
console.clear();
const shopName = 'Xemium';
let currency = 'EUR';
const inventory = [
    { id: 1, pavadinimas: 'Spinteles', isigijimoKaina: 50, pardavimoKaina: 100, kiekis: 5, kategorija: 'Juodos' },
    { id: 2, pavadinimas: 'Spinteles', isigijimoKaina: 60, pardavimoKaina: 110, kiekis: 3, kategorija: 'Baltos' },
    { id: 3, pavadinimas: 'Plyteles', isigijimoKaina: 10, pardavimoKaina: 20, kiekis: 10, kategorija: '' },
    { id: 4, pavadinimas: 'Durys', isigijimoKaina: 80, pardavimoKaina: 150, kiekis: 3, kategorija: '' },
];
function intro() {
    return `Sveiki atvykę į ${shopName}! Mes prekiaujame ${currency} valiuta.`;
}
function displayInventory() {
    console.log('Inventorius:');
    for (const product of inventory) {
        console.log(`ID: ${product.id}, Pavadinimas: ${product.pavadinimas}`);
        console.log(`Isigijimo kaina: ${product.isigijimoKaina} ${currency}`);
        console.log(`Pardavimo kaina: ${product.pardavimoKaina} ${currency}`);
        console.log(`Kiekis: ${product.kiekis}`);
        console.log(`Kategorija: ${product.kategorija}`);
        console.log('----------------------------');
    }
}
console.log(intro());
displayInventory();
