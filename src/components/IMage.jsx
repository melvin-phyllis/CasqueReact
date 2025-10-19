
import Image from 'react-bootstrap/Image';
import product from "../controllers/product"

const IMage = () => {
  return (
    <Image className='Image' src={product.image} fluid />
  )
}

export default IMage