function Filters({
  products,
  selectedCategory,
  setSelectedCategory,
  selectedBrands,
  setSelectedBrands,
  minimumPrice,
  setMinimumPrice,
  maximumPrice,
  setMaximumPrice
}) {

  const categoryOptions = [...new Set(products.map(p => p.category))]
  const brandOptions = [...new Set(products.map(p => p.brand).filter(Boolean))]

  function handleBrandToggle(event) {

    const brand = event.target.value

    if (event.target.checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      const updated = selectedBrands.filter(item => item !== brand)
      setSelectedBrands(updated)
    }
  }

  return (
    <div className="filters">

      <h3>Filters</h3>

      <div className="filter-group">

        <h4>Category</h4>

        {categoryOptions.map(cat => (
          <label key={cat} className="filter-item">

            <input
              type="radio"
              name="category"
              value={cat}
              checked={selectedCategory === cat}
              onChange={() => setSelectedCategory(cat)}
            />

            <span className="radio"></span>

            {cat}

          </label>
        ))}

      </div>

      <div className="filter-group">

        <h4>Price Range</h4>

        <div className="price-input">

          <input
            placeholder="Min Price"
            value={minimumPrice}
            onChange={e => setMinimumPrice(e.target.value)}
          />

          <input
            placeholder="Max Price"
            value={maximumPrice}
            onChange={e => setMaximumPrice(e.target.value)}
          />

        </div>

      </div>

      <div className="filter-group">

        <h4>Brand</h4>

        {brandOptions.map(brand => (
          <label key={brand} className="filter-item">

            <input
              type="checkbox"
              value={brand}
              onChange={handleBrandToggle}
            />

            <span className="checkbox"></span>

            {brand}

          </label>
        ))}

      </div>

    </div>
  )
}

export default Filters