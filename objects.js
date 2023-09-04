const darthVader =  {
    allegiance: "Empire",
    weapon: "lightsabre",
    sith: true,
}

console.log (darthVader.allegiance)
console.log (darthVader.weapon)
console.log (darthVader.sith)
console.log( darthVader.jedi)

console.log(Object.keys(darthVader).length); 

darthVader.children = 2;
darthVader.childNames = ['Luke', 'Leia']; 

console.log (darthVader.children);
console.log(darthVader.childNames[0]);

for (const key in darthVader)
    console.log("Key:", key, "Val:", darthVader[key]);


darthVader.allegiance = "The light side"
delete darthVader.children; 
console.log(Object.keys(darthVader));

let{allegiance, weapon, sith, childNames} = darthVader;

console.log (darthVader.allegiance)
console.log (darthVader.weapon)
console.log (darthVader.sith)
console.log (darthVader.childNames)
