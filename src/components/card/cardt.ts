
import {postAtt} from "../post/card";
export enum AttributeCard {
    "photo"= "photo",
    "comment"= "comment",
}

export default class Card extends HTMLElement{
    photo: string = "";
    comment: string = "";
    

    static get observedAttributes(){
        const attrs: Record <AttributeCard,null> = {
            photo: null,
            comment: null,
           
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot) this.shadowRoot.innerHTML = '';

            const container = this.ownerDocument.createElement('section');
            const buttonSection = this.ownerDocument.createElement('section');
            buttonSection.className= "button-section"

            const postCard = this.ownerDocument.createElement('app-figure');
            postCard.setAttribute(postAtt.photo, this.photo);
            postCard.setAttribute(postAtt.comment, this.comment);

            const button = this.ownerDocument.createElement('button');
            button.innerText = "Buy";
            button.addEventListener('click',() =>{

               
            })

            container.appendChild(postCard);
            buttonSection.appendChild(button);

            this.shadowRoot?.appendChild(container)
        }
}

customElements.define('app-card', Card)