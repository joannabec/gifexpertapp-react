import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddCategories from './components/AddCategories';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategory }) => {
  const [categories, setCategories] = useState(defaultCategory);

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

GifExpertApp.propTypes = {
  defaultCategory: PropTypes.arrayOf(PropTypes.string),
};
// según reglas de eslint, así se debe declarar el valor por defecto de un prop
GifExpertApp.defaultProps = {
  defaultCategory: [],
};

export default GifExpertApp;
