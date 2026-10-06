const prompt = require('prompt-sync')();

let grocery = Number (prompt("List the number of groceries you need:"))
let choice = []

for(let i = 0; i < grocery; i ++) {
    let numbers = prompt("Enter items: ").toLowerCase()
    choice.push(numbers);
}
console.log(choice)
while(true){
    let input = prompt("Search item: ").toLowerCase()
    if(input === "quit"){
        console.log("You've left the program.")
        break
    }
    else if(choice.indexOf(input) === -1){
        console.log("Not found")
        let ask = prompt("Do you want to add this item in the list? ")
        if (ask === "yes"){
            choice.push(input)
            console.log(`Your updated list is: ${choice} `)
        }
    }
    else{
        console.log("Found")
        let ask = prompt("Do you want to remove this item? ")
        if (ask === "yes"){
            let index = choice.indexOf(input);
            choice.splice(index, 1)
            console.log(`Your updated list is: ${choice} `)
        }
    }
}