import { createElement } from 'react';
import { Pagination as HDSPagination } from 'hds-react';

export default function Pagination({
  i18n,
  pagination,
  paged,
  setPaged,
}) {
  const {max_num_pages} = pagination || {};

  return createElement(HDSPagination, {
    language: i18n.locale,
    onChange: (event, index) => setPaged(index + 1),
    pageIndex: (paged - 1),
    pageCount: max_num_pages || 1,
    pageHref: () => '#',
  });
}
