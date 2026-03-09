import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getProductById } from "../services/productService"

function ProductDetail() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    loadProduct()
  }, [id])

  async function loadProduct() {
    const item = await getProductById(id)
    setProduct(item)
  }

  if (!product) {
    return <div>Loading product...</div>
  }

  return (
    <div className="detail-page">

      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Products
      </button>

      <div className="detail-card">

        <div className="detail-img">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div>

          <div className="detail-title">
            {product.title}
          </div>

          <div className="rating">
            ⭐ {product.rating}
          </div>

          <div className="detail-price">
            ${product.price}
          </div>

          <div className="detail-desc">
            {product.description}
          </div>

          <div>Brand: {product.brand}</div>
          <div>Category: {product.category}</div>

        </div>

      </div>

    </div>
  )
}

export default ProductDetail