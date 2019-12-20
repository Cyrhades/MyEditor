export default class PopUp {
     
    constructor(UI) {
        this.ui = UI;
    }

    create(name) {
        // On vérifie pour voir si on a pas déjà une popup de disponible
        if (typeof document.querySelector('#popUp_'+name) == 'undefined') {
            // on doit créer la fenetre avant de l'ouvrir
        }        
        this.open(name)
    }

    destroy(name) {
        // On vérifie pour voir si on a pas déjà une popup de disponible
        this.close(name)
    }

    open(name) {
        this.create(name)
    }

    close(name) {

    }
}