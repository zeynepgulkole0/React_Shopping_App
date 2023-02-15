import React from 'react'


// Baska componentlerden veya app.js den gelen propsları burada tutmalıyız
function Product({product, cart, setCart, total, money}) {

    const productAmount = cart.find(item => item.id === product.id)?.amount || 0;


    // Satın al butonuna basıldığında(onClick olduğunda) çalışacak fonksiyon
    const addCart = () => {
        // console.log('Satın Al');
        // setCart([...cart, product]);

        // Burada addCart dediğimde yani satın al butonuna bastığımda ürün var mı yok mu bunu kontrol etmeliyim 
        const checkCart = cart.find(item => item.id === product.id);

        // ürün daha önce eklenmiş mi
        if(checkCart){
            // Ürün daha önce eklenmişse ama tekrardan miktarını arttırmak istiyorsak ve 
            // cartı güncellemek için ise filterla eklenmemiş ürün ile var olan ürünü filtreleyi güncelleriz
            
            checkCart.amount += 1;
            setCart([...cart.filter(item => item.id !== product.id), checkCart])
            console.log('daha önce eklenmiş');
        }else{
            // ürün yoksa ürün ekleyelim
            setCart([...cart, {
                id: product.id,
                amount:1
            }]);
            

        }
    }

    const removeCart = () => {
        const currentCart = cart.find(item => item.id === product.id)
        const cartWithoutCurrent = cart.filter(item => item.id !== product.id)
            currentCart.amount -= 1;
            if (currentCart.amount === 0 ) {
                // sepetteki ürünün miktarı sıfırsa(son ürünüde sattıysa) o ürünü sepetten cıkarmalıyım
                setCart([...cartWithoutCurrent]);
            }else{
                setCart([...cartWithoutCurrent, currentCart]);
            }
            console.log('sepetteki ürün eksildi');
    
        }

  return (
    <>
    
    <div className='container'>
        <div className='product'>
        {/* app.js de map ile döndüğümüz "products.map(product =>)" dataları ekrana basıyoruz */}
        <div className="image-container">
        <img src={product.image} alt={product.title} /> 
         </div>
       
        <h2 className='title_product'>{product.title}</h2>
        <h3 className='price_product'>${product.price}</h3>
        </div>
        <div className='action'>
            <button className='action_btn_sat' disabled={!productAmount} onClick={removeCart}>Sat</button>
            <span className='amount'>Ürün adedi: {productAmount} </span>
            {/* Aşagıdaki buton ürünlerin toplam fiyatı kalan paramızdan büyükse satın al butonu disabled yap diyoruz */}
            <button className='action_btn_al' disabled={total + product.price > money} onClick={addCart}>Satın Al</button>
        </div>
      <style jsx>{
        `
        .container{
            display:flex;
            flex-direction:column;
            border: 1px solid #ccc;
            padding: 10px;
            margin-top:10px;
            background-color: white;
            border-radius: 5px;
            background-color: #EFEBFA;

        }
        .product {
            display:flex;
            flex-direction:column;
            align-items:center;
            padding:0;
            
        }
        .product img{
            width:100px;
            border-radius: 50%;
        }
        .action{
            display:flex;
            gap:15px;
            justify-content:center;
            align-items:center;
        }
        .action_btn_sat{
            background-color: #FF3404;
            color: white;
            border: none;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
            width:60px;
            height:30px;
            font-size:16px;
        }
        .action_btn_al{
            background-color: #3CA600;
            color: white;
            border: none;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
            width:60px;
            height:30px;
            font-size:14px;
        }
        .title_product{
            padding-top:10px;
        }
        .price_product{
            padding-bottom:10px;
        }
        .image-container {
            position: relative;
            
          }
          .image-container img {
            transition: all 0.5s ease;
          }
          
          .image-container:hover img {
            transform: scale(1.7);
            z-index: 1;
          }


        `
      }</style>

    </div>
    </>
  )
}

export default Product
