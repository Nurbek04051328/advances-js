// Set

const flights = ['Russia', 'USA', 'London', 'Canada'];

const setFlights = new Set(flights);
console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has('Canada'));
setFlights.add('Paris');


for(const flight of setFlights) {
  console.log(flight);
};

console.log([...setFlights]);

const setObj = new Set([{a:1}, {b:2}]);
console.log(setObj);
console.log(new Set('absdef'));