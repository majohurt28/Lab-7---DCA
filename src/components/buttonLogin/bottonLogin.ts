import Loginbuttonstyle from "./Loginbuttonstyle.css"

class LoginButton extends HTMLElement {
    button?: HTMLElement;

   

    connectedCallback(){
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.button = this.ownerDocument.createElement('button');
        this.button.id = "signButton"
        this.button.textContent = 'Log in';
        
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = Loginbuttonstyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("Login-button", LoginButton);
export default LoginButton;