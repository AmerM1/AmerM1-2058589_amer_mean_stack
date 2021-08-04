function addBudget() {
    var ClientName = document.getElementById("Client Name").value;
    var ProjectName = document.getElementById("Project Name").value;
    var budget = document.getElementById("budget").value;


    var Tbudget = JSON.parse(localStorage.getItem("Tbudget") || "[]");
    var Tgroup = {ClientN:ClientName,ProjectN:ProjectName,Bug:budget};
     
    // adds elements to the array
    Tbudget.push(Tgroup);
    localStorage.setItem("Tbudget", JSON.stringify(Tbudget));

    alert("New budget has been added");
}
// display in table format
function displayAB() {
    var Tbudget = JSON.parse(localStorage.getItem("Tbudget") || "[]");

    var currencyF = new Intl.NumberFormat('en-US', 
    {
        style: 'currency',
        currency: 'USD'
        
    });
    
    var tableContent = "";

    var top = "<label>Annual Budget</label><br><br><table border=2><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";

  

    var bottom = "</table>";

    // need to set total to zero $.
    var Tot = 0;
    
    Tbudget.forEach(title => {
        tableContent += "<tr><td>"+title.ClientN+"</td><td>"+title.ProjectN+"</td><td>"+currencyF.format(title.Bug)+"</td></tr>";
        // to get total--> total = total + budget
        Tot = + Tot + +title.Bug;
    });

    tableContent = (top + tableContent + bottom) 
    + "<br><label>Total cost: " + currencyF.format(Tot);

    document.getElementById("Tabel").innerHTML = tableContent;
}

function removeStorage(){
    localStorage.clear();
    window.location.reload();

    alert("data is cleared ");

    document.getElementById('rs').innerHTML= tableContent;

}

