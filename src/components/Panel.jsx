import React from 'react'

const Panel = ({product}) => {
  return (
    <div className='dv-product-Panel'>
        <div className='dv-content-box'>
            <span className='dv-product-name-panel'>نام: {product.Name}</span><br />
            <span className='dv-product-description'>توضیحات: {product.Description}</span><br />
            <div className='dv-product-stock'>موجودی: {product.Stock}</div>
            <div className='dv-product-price'>قیمت: {product.Price} تومان</div>
            <div className='dv-product-discount'>قیمت نهایی: {product.PriceWithDiscount} تومان</div>
        </div>
        <div className='dv-image-box'>
            <img className='dv-product-image-panel' src={product.IndexImageurl} alt='{product.Name}' />
        </div>
    </div>
  )
}

export default Panel