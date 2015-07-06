var product_list = document.getElementById("order_list");
var productQuant = document.getElementsByClassName("quantity-input");


window.onload = function() {
	
	for(var i = 0; i<6; i++) {
		productQuant[i].value = "1";
	}
	var img = document.getElementById( 'logo' );
	img.src = "Photos/Dolce_House.svg";
	
	if (window.innerWidth<window.innerHeight) {
		img.style.width="60%";
		img.style.height="auto";
	} else {
		img.style.width="20%";
		img.style.height="auto";
	}

}

var buttonIndex = {
	add_order_btn_1 : 0,
	add_order_btn_2 : 1,
	add_order_btn_3 : 2,
	add_order_btn_4 : 3,
	add_order_btn_5 : 4,
	add_order_btn_6 : 5
}
var productNum = 1;

var out = "<table width='100%' style='table-layout:fixed;background-color: rgba(255,255,255,0.3); border-radius: 10px; border: 1px solid #3268E7; padding: 3%;'><tr><th>Order Number</th><th>Product</th><th>Quantity</th><th>Price</th></tr>";
var product = document.getElementsByClassName("product-title");

function updateList(clickedID) {

	out += ('<tr><td>'+productNum+'</td><td>'+product[(buttonIndex[clickedID])].innerHTML+'</td><td>'+productQuant[(buttonIndex[clickedID])].value+'</td><td>price</td></tr>');
	console.log(out);
	document.getElementById("order-table").innerHTML = out+"</table>";
	productNum++;
	productQuant[(buttonIndex[clickedID])].value = "1";

}