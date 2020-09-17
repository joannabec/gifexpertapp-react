/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Testeando GifExpertApp', () => {
  test('Debería renderizar el componente correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debería mostrar una lista de categorías', () => {
    const categories = ['Avatar', 'Hola'];
    const wrapper = shallow(<GifExpertApp defaultCategory={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
