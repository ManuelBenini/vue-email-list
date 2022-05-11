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
            if(this.ApiEmails.length === 10){
              this.isLoadingOver = true 
             }
          });
      }
    }

  },

  mounted(){

    //delay alla funzione per far vedere che il loading funziona
    // setTimeout(() =>{
    //   this.getEmails();
    // }, 2000)
    this.getEmails()
  },

});