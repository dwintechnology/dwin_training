// clsswork task 1
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  const{numPlanets, ...planetsYears} = planetFacts;
  console.log(numPlanets, planetsYears);
  
  // classwork task 3
  const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  const{a, b} = obj.numbers;
  console.log(a);
  console.log(b);
  
  // classwork task 4
  function raceResults(first,second,tree,...ress){
   let obj={first,second,tree,ress}
   console.log(obj)
  }
  raceResults('Tom', 'Margaret', 'Allison', 'David', 'Pierre')