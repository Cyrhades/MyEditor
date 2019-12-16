export default class Menu {
     
    constructor() {
        this.elements = [
            {
                title : 'Test 1',
                callback : () => {
                    alert('ok element 1');
                }
            },
            {
                title : 'Menu 2',
                callback : () => {
                    alert('element 2');
                }
            }
        ]
    }

    get() {
        return this.elements
    }
}