const app = new Vue({

  el: '#app',

  data:{

    ApiEmails: [],
    emailsToGet: 10,
    isLoadingOver: false,
    isError: false,
    errorMsg: ''

  },

  methods:{

    getEmails(){
      for(let i = 0; i < this.emailsToGet; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) =>{
            this.ApiEmails.push(response.data.response);
            if(this.ApiEmails.length === this.emailsToGet){
              this.isLoadingOver = true 
            }
          })
          .catch((error) => {
            console.log('------>', error);
            this.errorMsg = error;
            this.isError = true;
          })
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