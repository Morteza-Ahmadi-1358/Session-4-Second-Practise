import { useState } from 'react'
import styles from './App.module.scss'
import Button from './components/Button'
import Panel from './components/Panel'

function App() {
  const [products, setProducts] = useState([
    {Id:0, Name: 'سامسونگ مدل Galaxy S23 Ultra', Description: 'گوشی موبایل سامسونگ مدل Galaxy S23 Ultra دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت - ویتنام', Stock: 10, Price: 48500000, PriceWithDiscount: 46600000, IncredibleOffer: true, DisplaySuggest: true, IndexImageurl: "https://dkstatics-public.digikala.com/digikala-products/ebe1b2041a76fda30ce7b8870ddfd627f5affa2a_1681800756.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"},
    {Id:1, Name: 'سامسونگ مدل Galaxy A54 5G', Description: 'گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت', Stock: 10, Price: 14200000, PriceWithDiscount: 13900000, IncredibleOffer: true, DisplaySuggest: true, IndexImageurl: "https://dkstatics-public.digikala.com/digikala-products/f1c52ab36a753464bb6a17919f6b3f781acc44b5_1679766683.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"},
    {Id:2, Name: 'سامسونگ مدل Galaxy A14', Description: 'گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - ویتنام', Stock: 10, Price: 5105000, PriceWithDiscount: 5000000, IncredibleOffer: true, DisplaySuggest: true, IndexImageurl: "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1681112650.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"},
    {Id:3, Name: 'سامسونگ مدل Galaxy S23 FE', Description: 'گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام', Stock: 10, Price: 23125000, PriceWithDiscount: 22500000, IncredibleOffer: true, DisplaySuggest: true, IndexImageurl: "https://dkstatics-public.digikala.com/digikala-products/bd7648d55ffe49a0596ac3668f4db41f7c790f6a_1696760508.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"},
    {Id:4, Name: 'سامسونگ مدل Galaxy A54 5G', Description: 'گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام', Stock: 10, Price: 15000000, PriceWithDiscount: 14650000, IncredibleOffer: true, DisplaySuggest: true, IndexImageurl: "https://dkstatics-public.digikala.com/digikala-products/f1c52ab36a753464bb6a17919f6b3f781acc44b5_1684135768.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"},
    {Id:5, Name: 'سامسونگ مدل Galaxy S23 Ultra', Description: 'گوشی موبایل سامسونگ مدل Galaxy S23 Ultra دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت', Stock: 10, Price: 48000000, PriceWithDiscount: 46000000, IncredibleOffer: true, DisplaySuggest: true, IndexImageurl: "https://dkstatics-public.digikala.com/digikala-products/ebe1b2041a76fda30ce7b8870ddfd627f5affa2a_1681800756.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"},
  ]);
  const [product, setProduct] = useState(products[0]);
  const getProductById = (id) => {
    products.map((product) =>{
      if(product.Id === id){
        setProduct(product);
      }
    })
  }
  return (
    <div className={styles.dv_main_content}>
      <div className={styles.dv_buttons}>
        {
          products.map((product) => {
            return <Button key={product.Id} data={product} getProductById={getProductById}/>
          })
        }
      </div>
      <div className={styles.dv_panels}><Panel product={product}/></div>
    </div>
  )
}
export default App