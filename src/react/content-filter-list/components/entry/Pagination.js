import { createElement } from 'react';
import { Pagination as HDSPagination } from 'hds-react';

export default function Pagination({
  i18n,
  pagination,
  paged,
  onChange,
  pageHref
}) {
  const {max_num_pages} = pagination || {};

  return (max_num_pages > 1) && createElement('div', {className: 'pagination'},
    createElement(HDSPagination, {
      language: i18n.locale,
      pageIndex: (paged - 1),
      pageCount: max_num_pages || 1,
      onChange,
      pageHref,
    })
  );
}
