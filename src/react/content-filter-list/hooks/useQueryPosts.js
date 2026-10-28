const queryActions = {
  filters: 'FILTERS',
	searching: 'SEARCHING',
	posts: 'POSTS',
	paged: 'PAGED',
	pagination: 'PAGINATION',
}

function queryReducer(state, action) {
  switch (action.type) {
    case queryActions.filters: {
      return { ...state, filters: action.payload };
    }

    case queryActions.searching: {
      return { ...state, searching: action.payload };
    }

    case queryActions.posts: {
      return { ...state, posts: action.payload };
    }

    case queryActions.paged: {
      return { ...state, paged: action.payload };
    }

    case queryActions.pagination: {
      return { ...state, pagination: action.payload };
    }

    default: {
			throw new Error(`Unhandled type: ${action.type}`);
		}
  }
}

function useQueryPosts({ reducer = queryReducer } = {}) {
  const [
    { filters, posts, paged, pagination, searching },
    dispatch
  ] = React.useReducer(reducer, {
    filters: {},
    posts: [],
    paged: 1,
    pagination: {},
    searching: false,
  });

  return {
    filters,
    posts,
    paged,
    pagination,
    searching,
    setFilter: (payload) => dispatch({ type: queryActions.filters, payload }),
    setPosts: (payload) => dispatch({ type: queryActions.posts, payload }),
    setPaged: (payload) => dispatch({ type: queryActions.paged, payload }),
    setPagination: (payload) => dispatch({ type: queryActions.pagination, payload }),
    setSearching: (payload) => dispatch({ type: queryActions.searching, payload })
  };
}

export { useQueryPosts, queryActions, queryReducer };
