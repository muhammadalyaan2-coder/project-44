
function buyNow() {

    document.getElementById("description").innerText =
    "Thank you! for buy our product";
}
function changeProduct() {
    document.getElementById("productImg").src =
    "https://images.unsplash.com/photo-1641048930621-ab5d225ae5b0?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

}
function welcome() {
    let name = document.getElementById("userName").value;

    document.getElementById("welcome").innerText =
    "Welcome, " + name + "!";

}
function changeImg() {

    document.getElementById("productImg").src =
    "https://images.unsplash.com/photo-1718382341267-aef8a9e4ecef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D";
}
function backImg() {
    document.getElementById("productImg").src =
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e";

}

function changeDetails() {

    document.getElementById("productName").innerText =
    "Gaming Headphone comfortable to wear and good looking headphone";

    document.getElementById("description").innerText =
    "Gaming ke liye zabardast headphone hai.";

    document.getElementById("price").innerText =
    "Price: Rs. 5000";

}

