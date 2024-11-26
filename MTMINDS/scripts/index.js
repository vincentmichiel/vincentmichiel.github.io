Paddle.Environment.set("sandbox");
  Paddle.Initialize({ 
    token: "test_576a670da1c59a1894c7202c319" // replace with a client-side token
  });

  let itemsList = [
    {
      priceId: "pri_01jdkwtf8wbh8cyjp4hcb4vydw",
      quantity: 10
    }
  ];
  
  // open checkout
  function openCheckout(items){
    Paddle.Checkout.open({
      items: items
    });
  }