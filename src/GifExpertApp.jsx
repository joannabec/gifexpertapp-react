import React, { useState } from 'react';
import AddCategories from './components/AddCategories';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* Componente del input */}
      <AddCategories setCategories={setCategories} />
      <hr />

      <ol>
        {/* Componente donde van el título y las cards */}
        {categories.map((item) => (
          <GifGrid key={item} category={item} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
