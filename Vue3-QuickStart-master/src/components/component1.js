import store from "../store.js";

store.$dados = []
export default {
  setup() {
    return { store };
  },
  data() {
    return {
      titulo: "Usando VueJS!",
      nome: "",
      email: "",
      mensagem: "",
      dados: "",
    };
  },
  methods: {
    sendDados: function sendDados() {
      fetch("https://run.mocky.io/v3/dfd8957c-7fa2-4a98-99ec-2081f3625123", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: this.nome,
          email: this.email,
          mensagem: this.mensagem,
        }),
      }).catch((err) => alert(err));
      store.$dados.push( {
        nome: this.nome,
        email: this.email,
        mensagem: this.mensagem,
      });
    },
  },

  template: `
  <div id="form" class="contact-clean">
  <form method="post">
      <h2 class="text-center">{{titulo}}</h2>
      <div class="form-group"><input type="text" class="form-control" name="name" placeholder="Nome" v-model="nome" /></div>
      <div class="form-group"><input type="email" class="form-control" name="email" placeholder="Email" v-model="email" /></div>
      <div class="form-group"><textarea class="form-control" name="message" placeholder="Mensagem" rows="14" v-model="mensagem"></textarea><button class="btn btn-primary" id="btnEnvio" type="button" v-on:click="sendDados">Enviar</button></div>
  </form>
</div>
    `,
};
