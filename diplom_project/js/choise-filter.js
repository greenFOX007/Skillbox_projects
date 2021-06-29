const element = document.querySelector('.gallery__filter');
const choices = new Choices(element, {
    searchEnabled: false,
    placeholder: false,
    renderSelectedChoices: 'auto',
    itemSelectText: '',
    sorter: () => {},
    resetScrollPosition: false,
  }
);
