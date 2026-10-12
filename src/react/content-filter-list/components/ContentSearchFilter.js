import { createElement, useEffect, useState, useRef } from 'react';
import { useQueryPosts } from '../hooks/useQueryPosts';
import { useSelectedTags } from '../hooks/useSelectedTags';
import useRestApi from '../hooks/useRestApi';
import debounce from '../helpers/debounce';
import Form from './search/Form';
import Results from './search/Results';
import SelectedFilters from './search/SelectedFilters';
import Pagination from './entry/Pagination';

export default function ContentSearchFilter({
  rootId,
  elements,
  i18n,
  query,
  taxonomies,
  rest
} = config || {}) {
  const resultsId = `${rootId}-results`;
  const resultsRef = useRef(null);

  const firstTitleRef = useRef(null);
  const [isSearch, setIsSearch] = useState(false);

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

  const {
    tags,
    setTags,
    removeTag,
    clearTags,
  } = useSelectedTags();

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

  const handleChange = (taxonomy, selectedOptions) => {
    let selected = filters[taxonomy] || [];
    let values = selectedOptions.map(({value}) => value);

    if (JSON.stringify(values) !== JSON.stringify(selected)) {
      setIsSearch(true);
      setTags(taxonomy, selectedOptions);
      setFilter({ ...filters, [taxonomy]: values});
      setPaged(1);
    }
  };

  const handlePageChange = (event, index) => {
    setIsSearch(true);
    setPaged(index + 1);
    resultsRef.current?.scrollIntoView();
  };

  const handleRemoveTag = (taxonomy, value) => {
    let selected = tags[taxonomy] || [];

    handleChange(taxonomy, selected.filter(tag => tag.value !== value));
  };

  const handleClearTags = () => {
    setIsSearch(true);
    clearTags();
    setFilter({});
    setPaged(1);
  };

  useEffect(() => handleSubmit(), [paged, filters]);
  useEffect(() => {
    if (!searching && isSearch && firstTitleRef.current) {
      firstTitleRef.current.focus();
      setIsSearch(false);
    }
  }, [searching]);

  return createElement('div', {className: 'content-filter-list'},
    createElement(Form, {
      handleSubmit,
      handleChange,
      filters,
      i18n,
      taxonomies,
      searching,
    }),
    createElement(SelectedFilters, {
      i18n,
      tags,
      handleRemoveTag,
      handleClearTags,
      searching
    }),
    createElement(Results, {
      resultsRef,
      resultsId,
      searching,
      firstTitleRef,
      posts,
      i18n,
      elements,
      taxonomies,
      totalResults: pagination?.found_posts
    }),
    createElement(Pagination, {
      i18n,
      pagination,
      paged,
      onChange: handlePageChange,
      pageHref: () => `#${resultsId}`,
    })
  );
}
