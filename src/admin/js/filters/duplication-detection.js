((wp) => {

  const {createHigherOrderComponent} = wp.compose;
  const {addFilter} = wp.hooks;
  const {select} = wp.data;
  const {createElement, useEffect} = wp.element;

  const isHelsinkiBlockWithBlockId = ({name, attributes}) => {
    return (name.startsWith('hds-wp/') || name.startsWith('helsinki-'))
      && attributes?.blockId !== undefined;
  };

  const isBlockIdReserved = ( blockId, clientId ) => {
    const blocksClientIds = select( 'core/block-editor' ).getClientIdsWithDescendants();

    return blocksClientIds.some( ( _clientId ) => {
      const { blockId: _blockId } = select( 'core/block-editor' ).getBlockAttributes( _clientId );
      return clientId !== _clientId && blockId === _blockId;
    } );
  };

  const generateBlockId = () => Date.now().toString(36) + Math.random().toString(36).substring(2,12).padStart(12,0);

  const withDuplicationDetection = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
      if ( isHelsinkiBlockWithBlockId(props) ) {
        const {clientId, attributes, setAttributes} = props;
        const {blockId} = attributes;

        const setBlockId = () => setAttributes({blockId: generateBlockId()});

        useEffect(() => {
          if ( ! blockId ) {
            setBlockId();
          } else if ( isBlockIdReserved(blockId, clientId) ) {
            console.info( `Block with id '${ blockId }' already exists. Regenerating...` );
            setBlockId();
          }
        }, [blockId]);
      }

      return createElement(BlockEdit, props);
    };
  }, 'withDuplicationDetection');

  addFilter(
    'editor.BlockEdit',
    'hds-wp/with-duplication-detection',
    withDuplicationDetection
  );

})(window.wp);
