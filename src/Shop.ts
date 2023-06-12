console.clear();

const shopName: string = 'Xemium';
let currency: string = 'EUR';

interface Product {
  id: number;
  pavadinimas: string;
  isigijimoKaina: number;
  pardavimoKaina: number;
  kiekis: number;
  kategorija: string;
}

const inventory: Product[] = [
  { id: 1, pavadinimas: 'Spinteles', isigijimoKaina: 50, pardavimoKaina: 100, kiekis: 5, kategorija: 'Juodos' },
  { id: 2, pavadinimas: 'Spinteles', isigijimoKaina: 60, pardavimoKaina: 110, kiekis: 3, kategorija: 'Baltos' },
  { id: 3, pavadinimas: 'Plyteles', isigijimoKaina: 10, pardavimoKaina: 20, kiekis: 10, kategorija: '' },
  { id: 4, pavadinimas: 'Durys', isigijimoKaina: 80, pardavimoKaina: 150, kiekis: 3, kategorija: '' },
];

function intro(): string {
  return `Sveiki atvykę į ${shopName}! Mes prekiaujame ${currency} valiuta.`;
}

function displayInventory(): void {
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
