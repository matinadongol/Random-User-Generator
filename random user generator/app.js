const app= Vue.createApp({
    data() {
        return {
            firstname: 'Matina',
            lastname: 'Dongol',
            email: 'dongolmt@gmail.com',
            gender: 'female',
            picture: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch ('https://randomuser.me/api')

            const { results } = await res.json()

            console.log(results)

            this.firstname= results[0].name.first
            this.lastname= results[0].name.last
            this.email= results[0].email
            this.gender= results[0].gender
            this.picture= results[0].picture.large
        },
    },
    
})

app.mount('#app')