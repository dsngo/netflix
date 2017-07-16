import reducers from '../redux/reducers';

test('@@INIT', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual({ searchTerm: '', apiData: {} });
});

test('SET_SEARCH_TERM', () => {
  const state = reducers(
    { searchTerm: '', apiData: {} },
    { type: 'SET_SEARCH_TERM', searchTerm: 'house' }
  );
  expect(state).toEqual({ searchTerm: 'house', apiData: {} });
});

test('ADD_API_DATA', () => {
  const state = reducers(
    { searchTerm: 'house', apiData: {} },
    {
      type: 'ADD_API_DATA',
      imdbID: 'tt1856010',
      apiData: {
        rating: '1.6',
        title: 'House of Cards',
        year: '2013–',
        description:
          'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',
        poster: 'hoc.jpg',
        imdbID: 'tt1856010',
        trailer: 'NTzycsqxYJ0',
      },
    }
  );
  expect(state).toEqual({
    searchTerm: 'house',
    apiData: {
      tt1856010: {
        rating: '1.6',
        title: 'House of Cards',
        year: '2013–',
        description:
          'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',
        poster: 'hoc.jpg',
        imdbID: 'tt1856010',
        trailer: 'NTzycsqxYJ0',
      },
    },
  });
});
