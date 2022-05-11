const app = new Vue({

  el: '#app',

  data:{

    ApiEmails: [],
    isLoadingOver: false

  },

  methods:{

    getEmails(){
      for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) =>{
            this.ApiEmails.push(response.data.response);
          })
      }
      this.isLoadingOver = true
    }

  },

  mounted(){
    this.getEmails();
  },

});