import store from "../store.js";

export default {
  
  template: `
    <div class="container features-clean">
    <div class="intro">
        <h2 class="text-center">Mensagens</h2>
    </div>
    <div class="row features">
        <div class="col-sm-6 col-lg-4 item" v-for="dado in dados" v-on:key="dado"><i class="fa fa-stack-exchange icon"></i>
            <h3 class="name" style="padding-bottom: -;">{{dado.nome}}</h3>
            <h6 class="d-md-flex justify-content-md-start align-items-md-center">{{dado.email}}</h6>
            <p class="description">{{dado.mensagem}}</p>
        </div>
        <div class="col-sm-6 col-lg-4 item" v-for="dado in dadosRecebidos" v-on:key="dado"><i class="fa fa-stack-exchange icon"></i>
            <h3 class="name" style="padding-bottom: -;">{{dado.nome}}</h3>
            <h6 class="d-md-flex justify-content-md-start align-items-md-center">{{dado.email}}</h6>
            <p class="description">{{dado.mensagem}}</p>
        </div>
    </div>
  </div>
    `,
  setup() {
    return { store };
  },
  data() {
    return {
      dados: "",
      dadosRecebidos:''
    };
  },
  methods: {},
  mounted: function () {
    this.dadosRecebidos = store.$dados
    fetch("https://run.mocky.io/v3/dfd8957c-7fa2-4a98-99ec-2081f3625123")
      .then((res) => res.json())
      .then((res) => (this.dados = res))
      .catch((error) => alert(error));
  },
};
