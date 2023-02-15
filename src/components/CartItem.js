import React from 'react'

function CartItem({item, product}) {
  return (
    <div className='title_amount'>
      {/* Burada carttaki ürünlerin baslıklarını ve miktarlarını ekrana basıyoruz ayrıca Cart componentinde kullanıyoruz */}
      {product.title} x {item.amount}

      <style jsx>{`
        .title_amount{
          margin:10px 0;
          font-size:20px;
          font-weight:bold;
        }
      `}</style>
    </div>
  )
}

export default CartItem
