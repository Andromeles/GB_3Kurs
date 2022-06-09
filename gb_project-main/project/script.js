const goods = [
  {photo: './img/products/macbook.jpg', title: 'Apple MacBook Air 13', price: 111500 },
  {photo: './img/products/apple-watch.jpg', title: 'Apple watch', price: 12300 },
  {photo: './img/products/mac-pro.jpg', title: 'Mac Pro', price: 1500 },
];

function renderGoodsItem(photo = "", title = "Default title", price = "Default price") {
  return `
    <div class="goods-item"> 
    <img src="${photo}" alt="${title}">
      <h3>${title}</h3>
      <p>${price} руб.</p>
      <button class="btn-1">Добавить</button>
    </div>
  `;
}

 function addCart(photo = "", title = "Default title", price = "Default price") {
  return `
  <tr>
  <th><img src="${photo}" alt="${title}"></th>
  <th>${title}</th>
  <th>${price} руб.</th>
  <th>1</th>
  <th>${price * 1}</th>
  </tr>
  `;
} 
let summary = 0;
goods.map(item => summary += item.price);
function renderGoodsList(list = {}) {
  document.querySelector('.goods-list').innerHTML = list.map(item =>
    renderGoodsItem(item.photo,item.title, item.price)).join('');
}
renderGoodsList(goods);
document.querySelector(".buttonHolder").addEventListener("click", ()=> {
  let cart = document.querySelector('#cart');
if(cart.style.display == '' || cart.style.display == 'none')
  cart.style.display = 'block';
else
  cart.style.display = 'none';
} ) 
function renderAddCart(list = {}) {
  document.querySelector('.cart_prod').innerHTML = list.map(item =>
    addCart(item.photo,item.title, item.price)).join(''); 
  
    document.querySelector("#finish").textContent = summary;
  }
renderAddCart(goods);
