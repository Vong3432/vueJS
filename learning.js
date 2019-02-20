var people = ["Greg", "Mary", "Devon", "James"];
people.pop();
people.push("Vong");
people.splice(2,1,"Elizabeth","Artie","James");

let withBob = people.concat("Bob");

console.log( withBob );

console.log( people );
