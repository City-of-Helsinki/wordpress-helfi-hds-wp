export default function useEntryElements(elements) {
  return {
    showThumbnail: () => elements.includes('image'),
    showExcerpt: () => elements.includes('excerpt'),
    showLink: () => elements.includes('link'),
    showAllTaxonomies: () => elements.includes('allTaxonomies'),
  };
}
