/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import AddCategories from '../../components/AddCategories';

describe('<AddCategories />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategories setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategories setCategories={setCategories} />);
  });

  test('Debería renderizar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debería cambiar el input', () => {
    // Primer argumento es el evento, el segundo argumento el valor de la propiedad value
    wrapper.find('input').simulate('change', { target: { value: 'Probando' } });
    // No se puede probar que el valor cambió porque no se muestra en el doc en este evento
  });

  test('No debería postear información al realizar el submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('No debería postear información al realizar el submit', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Avatar' } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    // expect.any(Function) --> se espera que se llame con una función
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
