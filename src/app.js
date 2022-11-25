const MyNomeApp = {
    data() {
        return {
            nome: "",
            idade: 28,
            input_name: ""
        }
    },
    methods: {
        submitform(event) {
            event.preventDefault();
            this.nome = this.input_name;
        }
    }
}

// #app - element
Vue.createApp(MyNomeApp).mount("#app");