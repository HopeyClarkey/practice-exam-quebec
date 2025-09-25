const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];

// #1 // 
const getNumberEntries = (object) => {
//create a function that takes in 1 param, a purchase object.
  stArr =[];
  for (let [key,value] in object){
    let stArr = object.filter((keys) => typeof value === 'number' ? [key, value] : 0 );
    }
  };
//each sub array should include the key and the value from the object 
//IF the value is a number datataype.
//example:
//getNumberEntries(purchases[0]);                     // [ ['quantity', 2 ], ['price', 12.99] ]
//^^function call ^purchase object [index location] return array ^sub array key, value  in ^ array
// #2 // 

const addKeyValuePairs = (object, additions) => {
  if (additions = []){
    return object;
  } else {
  object.additions[0][0] += additions[0][1];
  additions = additions.slice(0,1);
  console.log(additions)
  return addKeyValuePairs(object, additions);
  }
};

console.log(addKeyValuePairs(purchases[1], [ ['purchasedPreviously', false], ['initiatedReturn', true] ]));

// #3 //
const filterByPrice = (array, price) => {
  //create function that takes in array and price
  let newArr = array.filter((purchase) => purchase.price > price);
  //create new array that comprises the filter that is greater than price
  return newArr;
};

// #4 //
const mapPurchases = (array) => {
  let newArr = array.map((purchase) => purchase.product.toUpperCase() + " - " + "Review: " + purchase.mostLikedReviews[0].text);
  console.log(newArr);
  return newArr;
};
// #5 //
const accumulateString = (array) => {
  let blankString = '';
  let newString = array.reduce((blankString, current) => current.product[current.quantity.length-1] + blankString, ' ');
  console.log(newString);
  return (newString);

}

console.log(accumulateString(purchases))

// #6 //
const findProduct = (array, product) => {
  //base case - if the iteration's product description matches product
if (array[0].product === product){
  // loop through array by calling findproduct() again on what?
  return array[0];
} else {
  array = array.slice(0,1);
  return findProduct(array, product)
}};

// #7 //
const filterByReviewLength = (array) => {
//create function that takes in array and price
let stArr = [];
  for (i = 0; i < array.length; i++){
    let purchase = array[i];
  let reviews = purchase.mostLikedReviews.filter((review) =>  review.length > 35);
  stArr.push(reviews);
}
return stArr;
};


