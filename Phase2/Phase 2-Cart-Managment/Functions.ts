function addCartItem(name:string, price:number) {
   // console.log("Called Add item!");

    let Aitem = {nam:name,pric:price};
    let CartItems = JSON.parse(sessionStorage.getItem("Allitems") || "[]");

    CartItems.push(Aitem);

   sessionStorage.setItem("Allitems", JSON.stringify(CartItems));
   CartTotal();
}

function disAllItems() {
    let CartItems = JSON.parse(sessionStorage.getItem("Allitems") || "[]");

   
    var tableContent = "";
    var Top = "<table class=\"table table-hover\"><tr><th>Item Name</th><th>Price</th><th></th></tr>";
    var bottom = "</table>";
//using us currency format
    var currencyF = new Intl.NumberFormat('en-US', {

        style: 'currency',
        currency: 'USD'
    });

//assigning total price to start 0
    let Tot = 0;
    
    CartItems.forEach(Title => {
        tableContent += "<tr><td>"+Title.nam+"</td><td>"+currencyF.format(Title.pric);
        Tot = +Tot + +Title.pric;
    });

    tableContent = Top + tableContent + bottom + "<br><label>Total price: " + currencyF.format(Tot);
    document.getElementById("CheckAllItems").innerHTML = tableContent;
}

function CartTotal() {
    let CartItems = JSON.parse(sessionStorage.getItem("Allitems") || "[]");
    let TotItems = CartItems.length;
    document.getElementById("CartAmount").innerHTML = TotItems;
}

