import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { shallow, render } from 'enzyme';
import preload from '../../public/data.json';
import { setSearchTerm } from '../redux/actionCreators';
import store from '../redux/store';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm="" />
  );
  expect(component).toMatchSnapshot();
});

test('Search should render a ShowCard for each show', () => {
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm="" />
  );
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house';
  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search shows={preload.shows} searchTerm="" />
      </MemoryRouter>
    </Provider>
  );
  const showCount = preload.shows.filter(show =>
    `${show.title} ${show.description} ${show.year}`
      .toLowerCase()
      .includes(searchWord.toLowerCase())
  ).length;
  expect(component.find('.show-card').length).toEqual(showCount);
});
