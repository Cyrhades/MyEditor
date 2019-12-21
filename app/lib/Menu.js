export default class Menu {
     
    constructor(UI) {
        this.ui = UI;
        this.elements = [
            {
                title : 'Créer un nouveau niveau',
                callback : () => {
                    this.ui.openWindow('new_world','Nouveau niveau', null, 300, 200, 100, 200, true, true);
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