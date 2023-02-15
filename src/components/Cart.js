import React from 'react'
import CartItem from './CartItem'

function Cart({cart, products, total, resetCart}) {
  return (
    <div className='cart'>
      {cart.map(item=>(
        <CartItem item={item} product={products.find(p => p.id === item.id)} />
      ))}

        <div className='cart_total'>
            Toplam: ${total} 
        </div>

        <button className='btn_reset' onClick={resetCart}>Sepeti sıfırla</button>
        
        <style jsx>{
            `
            .cart{
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
            }
            .cart_total{
                font-weight:bold;
                font-size:20px;
                margin:10px 0;
                color:#3CA600;

            }
            .btn_reset{
                background-color: #FF3404;
                color: white;
                border: none;
                margin-top:15px;
                border-radius: 5px;
                cursor: pointer;
                width:100px;
                height:30px;
                font-size:14px;

            }
            `
        }</style>

    </div>
    
  )
}

export default Cart
