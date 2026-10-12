const tagActions = {
  set: 'SET',
  clear: 'CLEAR',
};

function tagReducer(state, action) {
  switch (action.type) {
    case tagActions.set: {
      let taxonomyTags = state[action.payload.taxonomy] || [];

      return {
        ...state,
        [action.payload.taxonomy]: action.payload.tags,
      };
    }

    case tagActions.clear: {
      return {};
    }

    default: {
			throw new Error(`Unhandled type: ${action.type}`);
		}
  }
}

function useSelectedTags({ reducer = tagReducer } = {}) {
  const [tags, dispatch] = React.useReducer(reducer, {});

  return {
    tags,
    setTags: (taxonomy, tags) => dispatch({
      type: tagActions.set,
      payload: {taxonomy, tags}
    }),
    clearTags: () => dispatch({ type: tagActions.clear }),
  };
}

export { useSelectedTags, tagActions, tagReducer };
