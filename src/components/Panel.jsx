import React from 'react'
import styles from './Panel.module.scss'

const Panel = ({product}) => {
  return (
    <div className={styles.dv_product_Panel}>
        <div className={styles.dv_content_box}>
            <span className={styles.dv_product_name_panel}>نام: {product.Name}</span><br />
            <span className={styles.dv_product_description}>توضیحات: {product.Description}</span><br />
            <div className={styles.dv_product_stock}>موجودی: {product.Stock}</div>
            <div className={styles.price_box}>
              <div className={styles.dv_product_price}>قیمت: {product.Price} تومان</div>
              <div className={styles.dv_product_discount}>قیمت: {product.PriceWithDiscount} تومان</div>
            </div>
        </div>
        <div className={styles.dv_image_box}>
            <img className={styles.dv_product_image_panel} src={product.IndexImageurl} alt='{product.Name}' />
        </div>
    </div>
  )
}

export default Panel