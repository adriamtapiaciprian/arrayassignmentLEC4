const prompt = require('prompt-sync')();

// let arr = [58, 31, 27, 86, 92, 8]
// console.log(Math.max(...arr))



// let number = prompt("Type your number: ")
// if (number >= 0){
//     let reversednumber = number.split("").reverse().join("");
//     console.log(`The reverse of this number is ${number} is ${reversednumber}`);
//     }
//     else{
//         let reversednumber = [...number.slice(1)].reverse().join("");
//         console.log(`The reverse of this number is ${number} is -${reversednumber}`);
//     }




// function uppercase(character) {
//     if (character === "a") {
//         character = "A";
//     } else if (character === "b") {
//         character = "B";
//     } else if (character === "c") {
//         character = "C";
//     } else if (character === "d") {
//         character = "D";
//     } else if (character === "e") {
//         character = "E";
//     } else if (character === "f") {
//         character = "F";
//     } else if (character === "g") {
//         character = "G";
//     } else if (character === "h") {
//         character = "H";
//     } else if (character === "i") {
//         character = "I";
//     } else if (character === "j") {
//         character = "J";
//     } else if (character === "k") {
//         character = "K";
//     } else if (character === "l") {
//         character = "L";
//     } else if (character === "m") {
//         character = "M";
//     } else if (character === "n") {
//         character = "N";
//     } else if (character === "o") {
//         character = "O";
//     } else if (character === "p") {
//         character = "P";
//     } else if (character === "q") {
//         character = "Q";
//     } else if (character === "r") {
//         character = "R";
//     } else if (character === "s") {
//         character = "S";
//     } else if (character === "t") {
//         character = "T";
//     } else if (character === "u") {
//         character = "U";
//     } else if (character === "v") {
//         character = "V";
//     } else if (character === "w") {
//         character = "W";
//     } else if (character === "x") {
//         character = "X";
//     } else if (character === "y") {
//         character = "Y";
//     } else if (character === "z") {
//         character = "Z";
//     } else if (character === " ") {
//         character = " ";
//     }

//     return character;
// }

// let input = prompt("Enter statement");
// let arr = input.split("");
// for (let i = 0; i < arr.length; i++){
//     arr[i] = uppercase(arr[i]);
// }
// let result = arr.join("");
// console.log(result)



function uppercase(character) {
    if (character === "a") {
        character = "A";
    } else if (character === "b") {
        character = "B";
    } else if (character === "c") {
        character = "C";
    } else if (character === "d") {
        character = "D";
    } else if (character === "e") {
        character = "E";
    } else if (character === "f") {
        character = "F";
    } else if (character === "g") {
        character = "G";
    } else if (character === "h") {
        character = "H";
    } else if (character === "i") {
        character = "I";
    } else if (character === "j") {
        character = "J";
    } else if (character === "k") {
        character = "K";
    } else if (character === "l") {
        character = "L";
    } else if (character === "m") {
        character = "M";
    } else if (character === "n") {
        character = "N";
    } else if (character === "o") {
        character = "O";
    } else if (character === "p") {
        character = "P";
    } else if (character === "q") {
        character = "Q";
    } else if (character === "r") {
        character = "R";
    } else if (character === "s") {
        character = "S";
    } else if (character === "t") {
        character = "T";
    } else if (character === "u") {
        character = "U";
    } else if (character === "v") {
        character = "V";
    } else if (character === "w") {
        character = "W";
    } else if (character === "x") {
        character = "X";
    } else if (character === "y") {
        character = "Y";
    } else if (character === "z") {
        character = "Z";
    } else if (character === " ") {
        character = " ";
    } else if (character === "A") {
        character = "a";
    } else if (character === "B") {
        character = "b";
    } else if (character === "C") {
        character = "c";
    } else if (character === "D") {
        character = "d";
    } else if (character === "E") {
        character = "e";
} else if (character === "F") {
        character = "f";
    } else if (character === "G") {
        character = "g";
    } else if (character === "H") {
        character = "h";
    } else if (character === "I") {
        character = "i";
    } else if (character === "J") {
        character = "j";
    } else if (character === "K") {
        character = "k";
    } else if (character === "L") {
        character = "l";
    } else if (character === "M") {
        character = "m";
    } else if (character === "N") {
        character = "n";
    } else if (character === "O") {
        character = "o";
    } else if (character === "P") {
        character = "p";
    } else if (character === "Q") {
        character = "q";
    } else if (character === "R") {
        character = "r";
    } else if (character === "S") {
        character = "s";
    } else if (character === "T") {
        character = "t";
    } else if (character === "U") {
        character = "u";
    } else if (character === "V") {
        character = "v";
    } else if (character === "W") {
        character = "w";
    } else if (character === "X") {
        character = "x";
    } else if (character === "Y") {
        character = "y";
    } else if (character === "Z") {
        character = "z";
    }

    return character;
}

let input = prompt("Enter statement");
let arr = input.split("");
for (let i = 0; i < arr.length; i++){
    arr[i] = uppercase(arr[i]);
}
let result = arr.join("");
console.log(result)