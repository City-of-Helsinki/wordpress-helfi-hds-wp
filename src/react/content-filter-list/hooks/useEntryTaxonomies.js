export default function useEntryTaxonomies(taxonomies, showAllTaxonomies) {
  return {
    showTaxonomy: (taxonomy) => (showAllTaxonomies || taxonomies[taxonomy]),
  };
}
