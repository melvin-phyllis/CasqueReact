import product from "../controllers/product"
const Name = () => {
  return (
    <span className='fs-4'>{product.name}</span>
  )
}

export default Name