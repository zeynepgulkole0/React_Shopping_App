import React from 'react'
import { moneyFormat } from '../helpers'
// Burada app.js den aldığımız propları bu sayfada kullanıyoruz
function Header({money, total}) {
  return (
    <div className='header'>
        {/* total 0 dan büyükse paramızdan toplam aldığımız ürünlerin fiyatından çıkarıyoruz ve kalan paramızı bulutoruz */}
        {total > 0 && (
            <div>
                Harcayacak  <span>{moneyFormat(money - total)}</span> paranız kaldı
            </div>
        )}

        {/* başlangıçtaki para */}
        {total === 0 && (
            <div>
                Harcamak için  <span>{moneyFormat(money)}</span> paranız var!
            </div>
        )}
        {money - total === 0 && (
            <div>
                Harcamak için paranız kalmadı!
            </div>
        )}
        <style jsx>
            {`
            .header{
                
                position:sticky;
                top:0;
                z-index:999;
                background: linear-gradient(to bottom, pink, purple);
                height:60px;
                padding: 10px;
                display:flex;
                text-align: center;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                font-weight: bold;
                color: white;

            }

            .header span{
                margin:0 10px;
                font-weight:bold;

                
            }
            `}
        </style>
        
    </div>
  )
}

export default Header
