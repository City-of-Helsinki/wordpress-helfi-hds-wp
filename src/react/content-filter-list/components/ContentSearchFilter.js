import { createElement } from 'react';
import { useEffect, useState } from 'react';
import { useQueryPosts } from '../hooks/useQueryPosts';
import useRestApi from '../hooks/useRestApi';
import debounce from '../helpers/debounce';
import Form from './search/Form';
import Results from './search/Results';
import Pagination from './entry/Pagination';

export default function ContentSearchFilter({
  elements,
  i18n,
  query,
  taxonomies,
  rest
} = config || {}) {
  const { get } = useRestApi(rest);

  const {
    filters,
    posts,
    paged,
    pagination,
    searching,
    setFilter,
    setPosts,
    setPaged,
    setPagination,
    setSearching
  } = useQueryPosts();

  const handleSubmit = debounce(() => {
    setSearching(true);

    get({...query, ...filters, paged})
      .then(response => response.json())
      .then(({posts, pagination}) => {
        setPosts(posts);
        setPagination(pagination);
      })
      .catch(error => console.error(error))
      .finally(() => setSearching(false));
  }, 200);

  useEffect(() => handleSubmit(), [paged]);
  useEffect(() => handleSubmit(), [filters]);

  return createElement('div', {},
    createElement(Form, {
      handleSubmit,
      filters,
      setFilter,
      i18n,
      taxonomies,
      searching
    }),
    createElement(Results, {
      searching,
      posts,
      i18n,
      elements,
      taxonomies
    }),
    createElement(Pagination, {
      i18n,
      pagination,
      paged,
      setPaged,
    })
  );
}
