import Dashboardstyle from './Dashboardstyle.css';
import getpost from '../services/getpost';
import LoginButton from "../../src/components/buttonLogin/bottonLogin";
import Messagecard, { messageAtt } from "../../components/message/message"
import { addObserver, appState, dispatch } from "../../src/store/index"


class Dashboard extends HTMLElement {
  postContainer: Messagecard[] = [];
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }


  async connectedCallback() {
    if (appState.post.length === 0) {
      const action = await getpost();
      dispatch(action);
    } else {
      this.render();
    }
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
    
      const css = this.ownerDocument.createElement("style");
      css.innerHTML = Dashboardstyle;
      this.shadowRoot?.appendChild(css);
  }

    const loginB = this.ownerDocument.createElement('log-in') as LoginButton;
    
    this.shadowRoot?.appendChild(loginB);

    appState.post.forEach((data) => {
      const postCard = this.ownerDocument.createElement("my-post") as Messagecard ;
      postCard.setAttribute(messageAtt.photo, data.photo);
      this.postContainer.push(postCard);
    });
   

    
  }
}

customElements.define("app-dashboard", Dashboard);
