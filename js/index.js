

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = price * quantity;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalPrice;
  console.log(subtotalPrice);
  return subtotalPrice;
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const productsArray = [...products]
  const selectTotalElement = document.querySelector('#total-value span')
  let total = 0

  
  
  // ITERATION 3
  productsArray.forEach((element) => {
    total += updateSubtotal(element)
  })

  selectTotalElement.innerText = total
  console.log(total)
  return total  
}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}
// ITERATION 5
function createProduct() {
  //... your code goes here
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
});