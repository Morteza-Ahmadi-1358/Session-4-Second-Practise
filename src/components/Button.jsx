import React from 'react'

const Button = ({data, getProductById}) => {
    const clickHandler = () => {
        getProductById(data.Id);
    }
  return (
    <div className='dv-product-button' onClick={clickHandler}>
        <span className='dv-product-name'>{data.Name}</span>
        <img className='dv-product-image' src={data.IndexImageurl} alt="{data.Name}"/>
    </div>
  )
}

export default Button