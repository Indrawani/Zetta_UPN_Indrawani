const purchasingBook = (name, author, price , discount, tax) => {

  let orderSummary ;

  const discountAmount = price * (discount / 100);
  const priceAfterDiscount = price - discountAmount;
  const amountOfTax = priceAfterDiscount * (tax / 100);
  const priceAfterTax = priceAfterDiscount + amountOfTax;  

  orderSummary = {
    name,
    author,
    price,
    discount,
    tax,
    discountAmount,
    priceAfterDiscount,
    amountOfTax,
    priceAfterTax
  }

  return orderSummary;

}

// Testing 

const book1 = {
  name: 'Koala kumal',
  author: 'Raditya Dika',
  price: 36_000,
  discount : 5,
  tax: 1,
}


const orderBook1 = purchasingBook(
  book1.name,
  book1.author,
  book1.price,
  book1.discount,
  book1.tax
);

console.log(orderBook1)