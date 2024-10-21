/** @param {NS} ns */
export async function main(ns) {
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

  var networkHash = new Map();

  networkHash.set("n00dles", ["4","0","1"]);
  networkHash.set("foodnstuff", ["16","0","1"]);
  networkHash.set("sigma-cosmetics", ["16","0","5"]);
  networkHash.set("joesguns", ["16","0","10"]);
  networkHash.set("hong-fang-tea", ["16","0","30"]);
  networkHash.set("harakiri-sushi", ["16","0","40"]);
  networkHash.set("iron-gym", ["32","1","100"]);

  // networkHash.set("harakiri-sushi", ["16","0","40"]);
  // networkHash.set("harakiri-sushi", ["16","0","40"]);
  // networkHash.set("harakiri-sushi", ["16","0","40"]);
  // networkHash.set("harakiri-sushi", ["16","0","40"]);

  for (let [key, value] of networkHash) {
      console.log("key " + key + "\nvalue " + value[2])

      
  }

}