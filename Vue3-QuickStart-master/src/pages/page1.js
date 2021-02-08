import component1 from "../components/component1.js";

export default {
  components: { component1 },
  template: `
        <div>
            <component1 v-on:clicked="getDadosRecebidos"></component1>
        </div>
    `,
  data() {
    return {
      envio: true,
      dadosRecebidos: [],
    };
  },
  methods: {
    getDadosRecebidos: function getDadosRecebidos(recebidos) {
      this.dadosRecebidos.push(recebidos);
      console.log(this.dadosRecebidos);
    },
  },
};
