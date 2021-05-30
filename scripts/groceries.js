// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Chocolate Chip Cookies $4.50",
		lactose: true,
		nutAllergy:false,
		organic: false,
		price: 4.50
	},
	{
		name: "Honey $3.99",
		lactose: true,
		nutAllergy:false,
		organic: true,
		price: 3.99
	},
	{
		name: "Trail Mix $4.99",
		lactose: true,
		nutAllergy:false,
		organic: false,
		price: 4.99
	},
	{
		name: "Reese's Peanut Butter Cups $5.00",
		lactose: true,
		nutAllergy:false,
		organic: false,
		price: 5.00
	},
	{
		name: "Butter $3.99",
		lactose: false,
		nutAllergy: true,
		organic: true,
		price: 3.99
	},
	{
		name: "Whipped Cream $1.99",
		lactose: false,
		nutAllergy: true,
		price: 1.99
	},
	{
		name: "Vanilla Ice Cream $6.00",
		lactose: false,
		nutAllergy: true,
		organic: true,
		price: 6.00
	},
	{
		name: "Yogurt $4.50",
		lactose: false,
		nutAllergy: true,
		organic: true,
		price: 4.50
	},
	{
		name: "Red Bell Peppers $2.99",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 2.99
	},
	{
		name: "Avocados $4.99",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 4.99
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	prods.sort(function(a, b) {
		return parseFloat(a.price) - parseFloat(b.price);
	});
	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseIntolerantNutAllergy") && (prods[i].lactose == true && prods[i].nutAllergy == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LacstoseIntolerantOrganic") && (prods[i].lactose == true && prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutAllergyOrganic") && (prods[i].nutAllergy == true && prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseIntolerantNutAllergyOrganic") && (prods[i].lactose == true && prods[i].nutAllergy == true && prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseIntolerant") && (prods[i].lactose == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutAllergy") && (prods[i].nutAllergy == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}	
	
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}