var readline = require('readline-sync');
var fs = require('fs');

let people = JSON.parse(fs.readFileSync("people.json").toString());

    var Fname = readline.question("Enter First Name: ");
    debugger;

    var Lname = readline.question("Enter Last Name: ");
    debugger;

    var gnd = readline.question("Enter Gender: ")
    debugger;

    var email = readline.question("Enter email: ")
    var Rectime = new Date().toLocaleString();

    people.push({
        "first name" : Fname,
        "last name" : Lname,
        "gender" : gnd,
        "email" : email,
        "time stored": Rectime
    });
console.log("Record logged successfully.");
debugger;

console.log(people);
fs.writeFileSync("people.json", JSON.stringify(people));
debugger;


