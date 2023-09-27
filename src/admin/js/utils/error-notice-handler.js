//remove error notices when block is removed

(() => {
  const {select, subscribe, dispatch} = wp.data;
  const {store} = wp.notices;
  const getBlocks = () => select('core/block-editor').getBlocks();

  Array.prototype.diff = function (a) {
    return this.filter(function (i) {
      return a.indexOf(i) < 0;
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
          removedBlock.length === 1 ||
          (removedBlock.length > 0 && removedBlock[0].name === 'core/paragraph')
        ) {
          const noticesToRemove = notices.filter((notice) =>
            notice.id.includes(removedBlock[0].clientId)
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
