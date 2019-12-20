import Menu from './Menu.js'
import PopUp from './PopUp.js'

/**
 * Cette classe gére l'interface utilisateur
 * 
 * @author LECOMTE Cyril <cyrhades76@gmail.com>
 */
export default class UserInterface {

    /**
     * constructor
     * @param {elementHtml} selector 
     * @param {objectJson} options
     */
    constructor(selector, options = {}) {
        this.rootElement =  document.querySelector(selector)
        this.popUp = new PopUp(this);
        this.menu = new Menu(this)
        this.options = options

        this.init()
    }

    init() {
        this.generateMenu()
    }


    generateMenu() {
        let menu = document.createElement('ul')
        this.menu.get().forEach((element) => {
            let li = document.createElement('li')
            li.textContent = element.title
            li.addEventListener('click', element.callback)
            menu.appendChild(li)
        });

        this.rootElement.appendChild(menu)
    }
}
