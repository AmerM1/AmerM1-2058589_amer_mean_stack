function addCartItem(name, price) {
    // console.log("Called Add item!");
    var Aitem = { nam: name, pric: price };
    var CartItems = JSON.parse(sessionStorage.getItem("Allitems") || "[]");
    CartItems.push(Aitem);
    sessionStorage.setItem("Allitems", JSON.stringify(CartItems));
    CartTotal();
}
function disAllItems() {
    var CartItems = JSON.parse(sessionStorage.getItem("Allitems") || "[]");
    var tableContent = "";
    var Top = "<table class=\"table table-hover\"><tr><th>Item Name</th><th>Price</th><th></th></tr>";
    var bottom = "</table>";
    //using us currency format
    var currencyF = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    //assigning total price to start 0
    var Tot = 0;
    CartItems.forEach(function (Title) {
        tableContent += "<tr><td>" + Title.nam + "</td><td>" + currencyF.format(Title.pric);
        Tot = +Tot + +Title.pric;
    });
    tableContent = Top + tableContent + bottom + "<br><label>Total price: " + currencyF.format(Tot);
    document.getElementById("CheckAllItems").innerHTML = tableContent;
}
function CartTotal() {
    var CartItems = JSON.parse(sessionStorage.getItem("Allitems") || "[]");
    var TotItems = CartItems.length;
    document.getElementById("CartAmount").innerHTML = TotItems;
}
