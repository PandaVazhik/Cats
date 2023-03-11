export class Card {
    _getTemplate(){
        const template = document.querySelector(this._selectorTemplate).content.querySelector('.card');
        return template
    }

    constructor(data, selectorTemplate, handleClickCatImage, handleCatTitle) {
        this._data = data;
        this._handleCatTitle = handleCatTitle;
        this._selectorTemplate = selectorTemplate;
        this._handleClickCatImage = handleClickCatImage;
    }

    getElement() {
        this._element = this._getTemplate().cloneNode(true);
        this.cardTitleElement = this._element.querySelector('.card__name');
        this.cardImageElement = this._element.querySelector('.card__image');
        this.cardLikeElement = this._element.querySelector('.card__like');

        this.cardTitleElement.textContent = this._data.name
        this.cardImageElement.src = this._data.image

        if(!this._data.favorite) {
            this.cardLikeElement.remove()
        }

        this.cardImageElement.addEventListener('click', () => {
            this._handleClickCatImage(this._data.image);
        })

        this.setEventListener();  
        return this._element;
    }

    getData(){
        return this._data;
    }

    getId(){
        return this._data.id;
    }

    setData(newData){
        this._data = newData;
    }

    deleteView() {
       this.element.remove();
       this.element = null;
    }


    setEventListener() {
        this.cardTitleElement.addEventListener('click',() => this._handleCatTitle(this))
    }
}