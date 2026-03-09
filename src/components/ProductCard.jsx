import { useNavigate } from "react-router-dom"

function ProductCard({ product }) {

  const navigate = useNavigate()

  function openProduct() {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="card" onClick={openProduct}>

      <div className="card-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="card-content">

        <div className="brand-pill">
          {product.brand || "Unknown"}
        </div>

        <div className="title">
          {product.title}
        </div>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <div className="price">
          ${product.price}
        </div>

      </div>

    </div>
  )
}

export default ProductCard