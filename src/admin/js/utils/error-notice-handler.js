//remove error notices when block is removed

(() => {
  const {select, subscribe, dispatch} = wp.data;
  const {store} = wp.notices;
  const getBlocks = () => {
    const blocks = [];
    const rootBlocks = select('core/block-editor').getBlocks();

    function getChildren(block) {
      const children = [];
      if (block.innerBlocks) {
        block.innerBlocks.forEach((innerBlock) => {
          children.push(innerBlock);
        });
      }
      if (children.length > 0) {
        children.forEach((child) => {
          blocks.push(child);
          getChildren(child);
        });
      }
    }

    rootBlocks.forEach((block) => {
      blocks.push(block);
      getChildren(block);
    });

    return blocks;
  };
  Array.prototype.diff = function (a) {
    return this.filter(function (i) {
      return !a.some((item) => item.clientId === i.clientId);
    });
  };

  let blocksState = getBlocks();

  subscribe(
    _.debounce(() => {
      const notices = select(store).getNotices();
      const newBlocksState = getBlocks();

      // Lock saving if notices contain error notices
      const errorNotices = notices.filter(
        (notice) => notice.status === 'error'
      );

      if (errorNotices.length > 0) {
        dispatch('core/editor').lockPostSaving('requiredValueLock');
      } else {
        if (select('core/editor').isPostSavingLocked()) {
          dispatch('core/editor').unlockPostSaving('requiredValueLock');
        }
      }

      // When very last block is removed, it's replaced with a new paragraph block.
      // This is a workaround to remove the error notice.
      if (
        blocksState.length > newBlocksState.length ||
        (newBlocksState.length === 1 &&
          newBlocksState[0].name === 'core/paragraph')
      ) {
        // remove newBlocksState from blocksState
        const removedBlock = blocksState.diff(newBlocksState);
        if (
          removedBlock.length > 0 ||
          (removedBlock[0].name === 'core/paragraph')
        ) {
          var clientIds = [];
          function getChildren(block) {
            const children = [];
            if (block.innerBlocks) {
              block.innerBlocks.forEach((innerBlock) => {
                children.push(innerBlock);
              });
            }
            if (children.length > 0) {
              children.forEach((child) => {
                clientIds.push(child.clientId);
                getChildren(child.clientId);
              });
            }
          }
          removedBlock.forEach((block) => {
            clientIds.push(block.clientId);
            getChildren(block);
          });

          const noticesToRemove = notices.filter((notice) =>
            clientIds.some((clientId) => notice.id.includes(clientId))
          );
          noticesToRemove.forEach((notice) => {
            dispatch('core/notices').removeNotice(notice.id);
          });
        }
      }
      blocksState = newBlocksState;
    }, 300)
  );
})(window.wp);
