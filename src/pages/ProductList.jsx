import { useEffect, useState } from "react"
import { getAllProducts } from "../services/productService"
import Filters from "../components/Filters"
import ProductCard from "../components/ProductCard"
import Pagination from "../components/Pagination"

function ProductList() {

  const [allProducts, setAllProducts] = useState([])
  const [visibleProducts, setVisibleProducts] = useState([])

  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedBrands, setSelectedBrands] = useState([])

  const [minimumPrice, setMinimumPrice] = useState("")
  const [maximumPrice, setMaximumPrice] = useState("")

  const [pageNumber, setPageNumber] = useState(1)

  const pageSize = 12

  useEffect(() => {
    loadProducts()
  }, [])

  async function loadProducts() {
    const products = await getAllProducts()
    setAllProducts(products)
    setVisibleProducts(products)
  }

  useEffect(() => {
    applyFilters()
  }, [selectedCategory, selectedBrands, minimumPrice, maximumPrice, allProducts])

  function applyFilters() {

    let filtered = [...allProducts]

    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(item => selectedBrands.includes(item.brand))
    }

    if (minimumPrice) {
      filtered = filtered.filter(item => item.price >= Number(minimumPrice))
    }

    if (maximumPrice) {
      filtered = filtered.filter(item => item.price <= Number(maximumPrice))
    }

    setVisibleProducts(filtered)
    setPageNumber(1)
  }

  const startIndex = (pageNumber - 1) * pageSize
  const pageItems = visibleProducts.slice(startIndex, startIndex + pageSize)

  return (
    <div className="container">

      <Filters
        products={allProducts}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        minimumPrice={minimumPrice}
        setMinimumPrice={setMinimumPrice}
        maximumPrice={maximumPrice}
        setMaximumPrice={setMaximumPrice}
      />

      <div>

        <div className="product-count">
          Showing {startIndex + 1} - {startIndex + pageItems.length} of {visibleProducts.length}
        </div>

        <div className="products-grid">
          {pageItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Pagination
          totalItems={visibleProducts.length}
          pageSize={pageSize}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />

      </div>

    </div>
  )
}

export default ProductList