import {LightningElement} from 'lwc';

export default class home extends LightningElement{

    handleMenu(e){
        this.dispatchEvent(new CustomEvent('menuchange', {detail : e.target.title}));
        console.log(e.target.title);
    }

}