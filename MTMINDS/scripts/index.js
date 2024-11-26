Paddle.Initialize({
  token: "test_576a670da1c59a1894c7202c319", // replace with a client-side token
  // prints events to console for debugging
  eventCallback: function(data) {
    console.log(data);
  }
});

// define items
let itemsList = [
  {
    priceId: "pri_01jdkwtf8wbh8cyjp4hcb4vydw",
    quantity: 10
  },
  {
    priceId: "pri_01jdkxqzqwztrcntf6v941nm4a",
    quantity: 1
  }
];

// define customer details
let customerInfo = {
  email: "sam@example.com",
  address: {
    countryCode: "US",
    postalCode: "10021"
  }
};

// open checkout
function openCheckout(items, customer) {
  Paddle.Checkout.open({
    items: items,
    customer: customer
  });
}
