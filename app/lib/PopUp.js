export default class PopUp {
     
    constructor(UI) {
        this.ui = UI;
        this.popUpDraggable = false;
    }

    create(name, title, icon, width = 400, height = 400, left = 0, top = 0, draggable = true, closable = true) {
        // On vérifie pour voir si on a pas déjà une popup de disponible
        if (document.querySelector('#popUp_'+name) === null) {
            var popup = document.createElement('div');
            popup.id = 'popUp_'+name;
            popup.style.width = width+"px"
            popup.style.height = height +"px"
            popup.style.border = '1px solid #0078d7'
            popup.style.background = '#FFFFFF'
            popup.style.zIndex = 1002 
            popup.style.position = "absolute" 
            popup.style.boxShadow = "0px 0px 40px #C2C2C2";
            popup.style.top = top+"px";
            popup.style.left = left+"px" 
            popup.setAttribute('draggable',"true")
    
            if(typeof title != 'undefined' || typeof icon != 'undefined') {
                var popupTitle = document.createElement('div');
                popupTitle.style.padding = "7px";
                popupTitle.style.font = "normal 9pt Microsoft Sans Serif";
                
                if(typeof icon != 'undefined' && icon != null) {
                    var popupIconTitle = document.createElement('img');
                    popupIconTitle.src = icon 
                    popupIconTitle.width = 16;
                    popupIconTitle.height = 16;
                    popupIconTitle.style.marginRight = "5px";
                    popupIconTitle.style.verticalAlign = "middle";
                    popupTitle.appendChild(popupIconTitle);
                }
                if(typeof title != 'undefined' && title != false 
                    && title != null && title != "none" && title != "") {
                    popupTitle.innerHTML += title;
                }
                popup.appendChild(popupTitle);
    
                if (typeof draggable != 'undefined' && draggable == true) {
                    // Déplacement de la fenetre
                    popupTitle.addEventListener("mousedown", (e) => {
                        var popup = e.currentTarget.parentNode;
                        this.popUpDraggable = popup;
                        popup.dataset.posCursorX = e.clientX-parseInt(popup.style.left)
                        popup.dataset.posCursorY = e.clientY-parseInt(popup.style.top)
                    });
    
                    popupTitle.addEventListener("mouseup", (e) => {
                        this.popUpDraggable = false;
                    });    
                    document.addEventListener("mouseup", (e) => {
                        this.popUpDraggable = false;
                    });
                    
                    document.addEventListener("mousemove", (e) => {
                          if (e.button === 0 && this.popUpDraggable !== false) {
                            var popup = this.popUpDraggable //e.currentTarget.parentNode;
                            var newPosX = e.clientX-this.popUpDraggable.dataset.posCursorX
                            var newPosY = e.clientY-this.popUpDraggable.dataset.posCursorY
                            popup.style.left = newPosX+"px"
                            popup.style.top = newPosY+"px"
    
                            if(parseInt(popup.style.left) <= 0) popup.style.left = 0;
                            if(parseInt(popup.style.top) <= 0) popup.style.top = 0;
    
                            /*
                            if(parseInt(popup.style.left)+parseInt(popup.style.width) >= window.innerWidth) 
                                popup.style.left = window.innerWidth-parseInt(popup.style.width)+"px";
    
                            if(parseInt(popup.style.top)+parseInt(popup.style.height) >= window.innerHeight) 
                                popup.style.top = window.innerHeight-parseInt(popup.style.height)+"px";
                            */
                        }
                    });
                } // fin condition draggable
            }
    
    
            if (typeof closable != 'undefined' && closable == true) {
                var popupClose = document.createElement('span');
                popupClose.innerHTML = '<svg fill="#333333" width=10 height=10 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.526 32.526" style="enable-background:new 0 0 32.526 32.526;" xml:space="preserve"><polygon points="32.526,2.828 29.698,0 16.263,13.435 2.828,0 0,2.828 13.435,16.263 0,29.698 2.828,32.526 16.263,19.091 29.698,32.526 32.526,29.698 19.091,16.263 "/></svg>';
                popupClose.style.position = "absolute";
                popupClose.style.top = "0px";
                popupClose.style.right = "0px";
                popupClose.style.padding = "8px 12px";
                popupTitle.appendChild(popupClose);
    
                // On ne souhaite pas déplacer la fenetre quand on clique sur le bouton close
                popupClose.addEventListener("mousemove", (e) => {e.stopPropagation();});
                popupClose.addEventListener("mouseover", (e) => {                    
                    e.currentTarget.style.backgroundColor = "#e81123";
                    e.currentTarget.querySelector('svg').setAttribute('fill','#FFFFFF')
                });
                popupClose.addEventListener("mouseleave", (e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.querySelector('svg').setAttribute('fill','#333333')
                });
                popupClose.addEventListener("click", (e) => {          
                    this.destroy(popup);
                });
            }
            document.body.appendChild(popup);
    
    
            /**
             * contenu de la popup
             */
            var popupContent = document.createElement('div');
            popupContent.style.padding = "7px";
            popupContent.style.font = "normal 9pt Microsoft Sans Serif";
            popupContent.innerHTML = 'test';
            popup.appendChild(popupContent);

            return popup
        }        
        return null;
    }

    destroy(name) {
        // On vérifie pour voir si on a pas déjà une popup de disponible
        name.parentNode.removeChild(name);

    }
}