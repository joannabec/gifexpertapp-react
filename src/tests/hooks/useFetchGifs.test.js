import { renderHook } from '@testing-library/react-hooks';
import useFetchGifs from '../../hooks/useFetchGifs';

describe('Testeando hook useFetchGifs', () => {
  test('Debería retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs());
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('Debería retornar el arreglo de imágenes y loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Avatar'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
