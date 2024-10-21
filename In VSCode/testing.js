

var mapTest = new Map();

var newMap = new Map()

newMap.set("Cricket", ["sport", "test", "showing?"]);
newMap.set("Apple", "fruit", "test2");

var inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 9 },
    { name: 'bananas', type: 'fruit', quantity: 5 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 12 },
    { name: 'fish', type: 'meat', quantity: 22 },
  ];

  /**  
   * Want to create a HashMap of key value pairs
   * Legend:
   * Key is name of computer
   * Value is an array containing relevant information
   * 
   * At pos [0] we have the amount of RAM on the machine
   * At pos [1] we have the amount of ports required to NUKE
   * At pos [2] we have the required hacking skill
   * 
  */

  // An example will be this
  mapTest['n00dles'] = ['4','0','1'];
  mapTest['foodnstuff'] = ['16','0','1'];
  mapTest['sigma-cosmetics'] = ['16','0','5'];
  mapTest['joesguns'] = ['16','0','10'];
  mapTest['hong-fang-tea'] = ['16','0','30'];
  mapTest['harakiri-sushi'] = ['16','0','40'];
  mapTest['iron-gym'] = ['32','1','100'];
  
  mapTest['harakiri-sushi'] = ['16','0','40'];
  mapTest['harakiri-sushi'] = ['16','0','40'];
  mapTest['harakiri-sushi'] = ['16','0','40'];
  mapTest['harakiri-sushi'] = ['16','0','40'];


//   console.log('mapTest is ' + typeof(mapTest));
//   console.log('newMap is ' + typeof(newMap));
//   console.log('inventory is ' + typeof(inventory));

//   console.log(inventory[0]['name'])
//   console.log(mapTest['n00dles'][0]);


// const operate = {operate: true};
// const unoperatable = {operate: false};

// const result = Map.groupBy(mapTest, ([1]) == 0 [1] >= 0 ? operate : unoperatable,);

// var mapSize = mapTest.mapSize
// console.log(mapTest.size)


// for (let i = 0; i < mapSize; i++) {
//     console.log(mapTest[i][0] + "\n")
//     console.log(mapTest[i][1] + "\n")
//     console.log(mapTest[i][2] + "\n")
// }

// for (let keys of mapTest.keys()) {
//     console.log("Key " + key);
//     console.log("Value " + value);
//   }

// console.log(mapTest.keys());

console.log(newMap.get("Cricket")[0])



// =========================================================================================
// Big change, we are now using proper map format where:
// 
// We write with:
// newMap.set("Cricket", ["sport", "test", "showing?"]);
//
// And we read from it with:
// console.log(newMap.get("Cricket")[0])
//
// We realized there was an issue when trying to iterate through our previous method
// =========================================================================================

// Continue work on testing2.js

var networkHash = new Map();

