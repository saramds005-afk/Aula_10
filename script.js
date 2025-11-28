// Alguns dados para você trabalhar
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
   

   /* 1. Faça uma função que filtre a lista de inventores para aqueles que nasceram de 1500 a 1599. */
   const lista1 = inventors.filter(function (inventors){
    return inventors.year >= 1500  && inventors.year <=1599
   })
   console.log(lista1)

  /*  2. Faça uma função que retorne um array com os primeiros e últimos nomes dos inventores. */
  const nomes = inventors.map(function(inventor){
   return '${inventor.first} ${inventor.last}';
  })

 console.log(nomes)
 /* 3. Faça uma função que ordene o array de inventores pela data de nascimento, do mais antigo para o mais
novo. */

const sortedInventors = inventors.sort((a.b)+ a.year > b.year)
 console.log(sortedInventors)

 /* 4. Faça uma função que identifique por quantos anos todos os inventores estiveram vivos juntos. */

  const anoIdade = invenctors.filter(elem => (elem.year> 1800 && elem.year<1899)).map(elem => elem.first + " " + elem.last)
  console.log(anoIdade)


 /* 5. Faça uma função que ordene os inventores pelos anos vividos. */

 const inventorAge = inventors.sort((a,b) => (a.passed - a.year) < b.passed - b.year)



/* 6. Crie uma função que remova as redundâncias na lista abaixo: */
/* const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
'walk', 'car', 'van', 'car', 'truck']; */

