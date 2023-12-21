import React from 'react'
import styles from './Button.module.scss'

const Button = ({data, getProductById}) => {
    const clickHandler = () => {
        getProductById(data.Id);
    }
  return (
    <div className={styles.dv_product_button} onClick={clickHandler}>
        <span className={styles.dv_product_name}>{data.Name}</span>
        <img className={styles.dv_product_image} src={data.IndexImageurl} alt="{data.Name}"/>
    </div>
  )
}

export default Button