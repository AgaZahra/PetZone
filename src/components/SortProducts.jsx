import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SingleCard from './SingleCard';

const SortProducts = () => {
  const products = useSelector(state => state.product); // Redux-dan məhsulları götür
  const [sortOrder, setSortOrder] = useState('price_desc'); // Default qiymət sıralaması

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'price_desc') {
      return b.price - a.price; // Qiymətə görə böyükdən kiçiyə
    } else if (sortOrder === 'price_asc') {
      return a.price - b.price; // Qiymətə görə kiçikdən böyüyə
    } else if (sortOrder === 'title_asc') {
      return a.title.localeCompare(b.title); // A-dan Z-yə
    } else if (sortOrder === 'title_desc') {
      return b.title.localeCompare(a.title); // Z-dan A-ya
    }
    return 0;
  });

  return (
    <div>
      <div className="sort-options">
        <label>
          Sort by:
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="price_desc">Price: High to Low</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="title_asc">Title: A-Z</option>
            <option value="title_desc">Title: Z-A</option>
          </select>
        </label>
      </div>
      <div className="product-list">
        {sortedProducts.map((product) => (
          <SingleCard key={product.id} allData={product} />
        ))}
      </div>
    </div>
  );
};

export default SortProducts;
