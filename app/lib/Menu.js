export default class Menu {
     
    constructor(UI) {
        this.ui = UI;
        this.elements = [
            {
                title : 'Créer un nouveau niveau',
                callback : () => {
                    
                }
            },
            {
                title : 'Créer une tuile',
                callback : () => {
                    alert('Création du tuile');
                }
            }
        ]
    }

    get() {
        return this.elements
    }
}