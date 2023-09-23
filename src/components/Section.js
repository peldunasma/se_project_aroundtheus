export default class Section{
    constructor( {items, renderer}, containerSelector ) {
        this._items = items; 
        this._renderer = renderer; 
        this._container = document.querySelector(containerSelector); 
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
          });
    }

    addItem(element) {
        // prepend adds html to beggining to the container 
        //after renders cards it prepends it to the beginning of the page
        this._container.prepend(element); 
    }
}