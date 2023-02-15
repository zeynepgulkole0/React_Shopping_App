import './App.css';
import Header from './components/Header';
import {useEffect, useState} from 'react';
import products from './products.json';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
 // başlangıç için para tanımlıyoruz.
  const [money, setMoney] = useState(2000);
// Burada ürünleri alma ve satma işlemlerini gercekleştirmek için bir sepete ihtiyacıöız var
// Satın al veya sat butonlarına tıkladığımızda sepeti güncellemek amaclanır
  const [cart, setCart] = useState([]);

// Sepetteki ürünlerin toplam fiyatını hesaplamak ve sepeti güncelemek için total değişkeni tanımlıyoruz
  const [total, setTotal] = useState(0);

// Sepeti sıfırlamak için fonksiyon tanımlıyoruz butona bastığımızda sepetin içindeki ürünler siliniyor([]).
  const resetCart = () => {
    setCart([]);
  }

// Cart da (sepet) herhangi bir değişiklik durumunda yani satın al ve ya sat aksiyonlarında çalışacak olan useEffect
// Sepetteki toplam tutarını değişiklik olduğunda güncelliyoruz

  useEffect(() => {
    // console.log(cart);
    setTotal(cart.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    },0))
    console.log(total);
  },[cart])

  return (
    
    <div className="container">
    {/* App.js componenlerin birleşiminden meydana gelen bir yapıdır. */}

    {/* Burada header componentine app.js de tanımladığımız değerleri props yöntemizle iletiyoruz */}
      <Header money={money} total={total}/>
      {total > 0 && (
  // sepeti resetlemek için fonksiyon açıyoruz
  // Sepet işlemlerini takip etmek için Cart componenti açıp gerekli propsları gönderiyoruz.
<div className="cart_component">
<Cart cart={cart} products={products} total={total} resetCart={resetCart} />

</div>
)}  

      {/* Burada ise product componentine app.js de tanımladığımız değerleri props yöntemizle iletiyoruz */}
      {/* Ayrıca products.json dosyasından da ürünleri buraya map ile dönüyoruz ama asıl dödüğümüz şey product.js sayfası */}
      {/* setCart ve cart bilgilerini asıl kullanılacak Cart componentine işlemek için gönderilir */}
      <div>
        {products.map(product => (
        <Product key={product.id} total={total} money={money} product={product} cart={cart} setCart={setCart} />
      ))}
      </div>
    </div>
  );
  
}

export default App;
