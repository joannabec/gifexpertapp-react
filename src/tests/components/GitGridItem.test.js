/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

const title = 'Titulo';
const url = 'https://algunsitio.com/foto.jpg';
const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe('Pruebas del componente <GifGridItem/>', () => {
  test('Debería renderizar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debería tener un párrafo con el título', () => {
    const paragraph = wrapper.find('p');
    expect(paragraph.text().trim()).toBe(title);
  });

  test('Deberían coincidir los atributos src y alt con el url y title', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debería tener la clase correcta', () => {
    const div = wrapper.find('div');
    expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
  });
});
