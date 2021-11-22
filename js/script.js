var app = new Vue({
    el: "#container",
    data: {
        email: "",
    },
    mounted(){
        const self = this;

        axios.
        get("https://flynn.boolean.careers/exercises/api/random/mail").
        then(function(response){
            self.email = response.data.response
        })
    }
})