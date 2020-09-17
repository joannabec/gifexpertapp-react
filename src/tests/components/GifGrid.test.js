/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
// mock de la función para asignar manualmente valores de retorno
jest.mock('../../hooks/useFetchGifs');

describe('Testeando <GifGrid />', () => {
  const category = 'Avatar';

  test('Debería renderizar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debería mostrarse la categoría como subtitulo', () => {
    const wrapper = shallow(<GifGrid category={category} />);
    const element = wrapper.find('h3');
    expect(element.text()).toBe('Avatar');
  });

  test('Debería mostrar items cuando se cargan imágenes de useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://cualquiercosa/imagen.jpg',
        title: 'Alguna descripción',
      },
      {
        id: '123',
        url: 'https://cualquiercosa/imagen.jpg',
        title: 'Alguna descripción',
      },
    ];
    // mockReturnValue para asignar los valores de retorno de la función
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
