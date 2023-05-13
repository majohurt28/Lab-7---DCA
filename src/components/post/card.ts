import postcardstyle from "./post.css"

export enum postAtt{
    "photo"= "photo",
    "comment"= "comment",
   
}

export  class Postcard extends HTMLElement {
    photo: string = "";
    comment: string = ""

    static get observedAttributes() {
        return ["photo", "comment"]
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName:postAtt,oldValue: undefined,newValue: string){
        switch(propName){
         default:
         this[propName] = newValue;
         this.render();
         break;
        }
        this.render()
    }

    connectedCallback(){
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = ``
            const css = this.ownerDocument.createElement("style");
        css.innerHTML = postcardstyle ;
        this.shadowRoot?.appendChild(css);
         
        const img = this.ownerDocument.createElement('img');
        img.setAttribute('src', this.photo)
        this.shadowRoot?.appendChild(img);
            
      
        }
    }

}

customElements.define("post-contentcard", Postcard)
export default Postcard;

