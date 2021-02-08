import * as pages from "./pages/index.js";
import './assets/css/contact-Form-Clean.css'
import './assets/css/Features-Clean.css'
import './assets/css/Header-Dark.css'
import './assets/css/styles.css'

window.app = {
  name: "App",
  components: Object.assign(pages),

  setup() {
    const { watchEffect, ref } = Vue;
    const page = ref(null);

    //url management
    watchEffect(() => {
      const urlpage = window.location.pathname.split("/").pop();
      if (page.value == null) {
        page.value = urlpage;
      }
    });

    return { page, pages };
  },

  template: `
          <header class="text-left d-md-flex justify-content-md-center align-items-md-center" style="text-align: left;">
          <nav class="navbar navbar-light navbar-expand-md">
              <div class="container-fluid"><button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggler"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                  <div class="collapse navbar-collapse" id="navcol-1">
                      <ul class="nav navbar-nav">
                          <li class="nav-item"><a class="nav-link" v-on:click="page = 'page1'">Envio</a></li>
                          <li class="nav-item"></li>
                          <li class="nav-item"><a class="nav-link" v-on:click="page = 'page2'">Mensagens</a></li>
                      </ul>
                  </div>
              </div>
          </nav>
        </header>
        <div id="content">
            <component :is="page || 'page1'"></component>
        </div>
    `,
};
