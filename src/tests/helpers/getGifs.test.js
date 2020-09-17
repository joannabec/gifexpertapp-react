import getGifs from '../../helpers/getGifs';

describe('Testeando getGifs', () => {
  test('Debería obtener 10 elementos si pasamos una categoría', async () => {
    const gifs = await getGifs('Avatar');
    expect(gifs.length).toBe(10);
  });

  test('Debería obtener 0 elementos si no se pasa una categoría', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
