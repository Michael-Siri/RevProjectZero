import {LightningElement} from 'lwc';

export default class nav extends LightningElement{

    handleMenu(e){
        this.dispatchEvent(new CustomEvent('menuchange', {detail : e.target.title}));
        console.log(e.target.title);
    }
}