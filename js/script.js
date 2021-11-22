var app = new Vue({
    el: "#container",
    data: {
        emails: [],
    },
    mounted(){
        const self = this;

        for (let i = 0; i < 10; i++){
            axios.
            get("https://flynn.boolean.careers/exercises/api/random/mail").
            then(function(response){
                self.emails.push(response.data.response)
            })
        }       
    }
})