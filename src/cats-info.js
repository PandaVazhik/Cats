import { generateRating, printNumerals } from "./utils.js";

export class CatsInfo {
    constructor(
        selectorTemplate,
        // handleEditCatInfo,
        // handleLikeCat,
        handleDeleteCat
    ) {
        this._selectorTemplate = selectorTemplate;
        // this._handleEditCatInfo = handleEditCatInfo;
        // this._handleLikeCat = handleLikeCat;
        this._handleDeleteCat = handleDeleteCat;
        this._data = {};
    }

    setData(cardInstance) {
        this._cardInstance = cardInstance;
        this._data = this._cardInstance.getData();

        this.catImage.src = this._data.image;
        this.catDesc.textContent = this._data.description;
        this.catName.textContent = this._data.name;
        this.catAge.textContent = this._data.age;
        this.catId.textContent = this._data.id;

        this.catAgeText.textContent = printNumerals(this._data.age, ["год", "года", "лет"])

        this.catRate.innerHTML = generateRating(this._data.rate);
    }

    _getTemplate() {
        const template = document.querySelector(this._selectorTemplate).content.querySelector('.cat-info');
        return template
    }

    getElement() {
        this.element = this._getTemplate().cloneNode(true);

        this.buttonEdited = this.element.querySelector('.cat-info__edited');
        this.buttonSaved = this.element.querySelector('.cat-info__saved');
        this.buttonDeleted = this.element.querySelector('.cat-info__deleted');
        this.buttonLiked = this.element.querySelector('.cat-info__favourite');

        this.catImage = this.element.querySelector('.cat-info__image');
        this.catId = this.element.querySelector('.cat-info__id');
        this.catName = this.element.querySelector('.cat-info__name');
        this.catRate = this.element.querySelector('.cat-info__rate');
        this.catAge = this.element.querySelector('.cat-info__age-val');
        this.catAgeText = this.element.querySelector('.cat-info__age-text');
        this.catDesc = this.element.querySelector('.cat-info__desc');

        this.setEventListener();
        return this.element;
    }


    setEventListener() {
        this.buttonDeleted.addEventListener('click', () => this._handleDeleteCat(this._cardInstance))
    }
}
