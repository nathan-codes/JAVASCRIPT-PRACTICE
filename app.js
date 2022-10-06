const todoItems = [];
let userInput = "";


while (userInput != "quit") {
    userInput = prompt("What would you like to do: ");


    if (userInput === "new") {
        let todoItem = prompt("What would like to add: ");
        todoItems.push(todoItem);
        console.log(`${todoItem} added to list`)
    }

     if (userInput === "list") {
        console.log("*********************")
        for (let item of todoItems) {
            console.log(`${todoItems.indexOf(item)}: ${item}`);
        }
        console.log("*********************")
    }

     if (userInput === "delete") {
        let spliceIndex = parseInt((prompt("Enter the index of the todo Item you wish to delete: ")));
        console.log(`${todoItems[spliceIndex]} has been deleted from the list`);
        todoItems.splice(spliceIndex,1);
    }






}


console.log("OK! You quit the app!");