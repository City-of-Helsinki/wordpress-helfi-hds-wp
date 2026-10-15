import { createElement, useEffect, useState, useRef } from 'react';
import { useQueryPosts } from '../hooks/useQueryPosts';
import { useSelectedTags } from '../hooks/useSelectedTags';
import useRestApi from '../hooks/useRestApi';
import useCachedQuery from '../hooks/useCachedQuery';
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
  const resultsTitleRef = useRef(null);
  const focusAfterSearch = useRef(null);

  const { get } = useRestApi(rest);
  const { query: cachedQuery } = useCachedQuery(get);
  const latestRequest = useRef(0);

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

  // Latest submit closure, so the stable debounced handler sees current state.
  const submit = useRef(null);
  submit.current = () => {
    const request = ++latestRequest.current;
    const isLatest = () => request === latestRequest.current;

    setSearching(true);

    cachedQuery({...query, ...filters, paged})
      .then(({posts, pagination}) => {
        if (isLatest()) {
          setPosts(posts);
          setPagination(pagination);
        }
      })
      .catch(error => console.error(error))
      .finally(() => isLatest() && setSearching(false));
  };

  const [handleSubmit] = useState(() => debounce(() => submit.current(), 200));

  const handleChange = (taxonomy, selectedOptions) => {
    let selected = filters[taxonomy] || [];
    let values = selectedOptions.map(({value}) => value);

    if (JSON.stringify(values) !== JSON.stringify(selected)) {
      focusAfterSearch.current = resultsTitleRef;
      setTags(taxonomy, selectedOptions);
      setFilter({ ...filters, [taxonomy]: values});
      setPaged(1);
    }
  };

  const handlePageChange = (event, index) => {
    focusAfterSearch.current = firstTitleRef;
    setPaged(index + 1);
    resultsRef.current?.scrollIntoView();
  };

  const handleRemoveTag = (taxonomy, value) => {
    let selected = tags[taxonomy] || [];

    handleChange(taxonomy, selected.filter(tag => tag.value !== value));
  };

  const handleClearTags = () => {
    focusAfterSearch.current = resultsTitleRef;
    clearTags();
    setFilter({});
    setPaged(1);
  };

  useEffect(() => handleSubmit(), [paged, filters]);
  useEffect(() => {
    if (!searching && focusAfterSearch.current) {
      focusAfterSearch.current.current?.focus();
      focusAfterSearch.current = null;
    }
  }, [searching, posts]);

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
      resultsTitleRef,
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
