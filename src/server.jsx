import { createServer, Model } from "miragejs";
import { Route } from "react-router-dom";

createServer({
    models: {
        van: Model,
    },

    seeds(server){
        server.create("van", {id:'1', title: 'Mount Fuji', startDate: '12 Jan, 2021', 
            endDate:'24 Jan, 2021', 
            description:'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
            imageURL:'https://source.unsplash.com/WLxQvbMyfas'
        })
        server.create("van", {id:'2', title: 'Mount Fuji', startDate: '12 Jan, 2021', 
            endDate:'24 Jan, 2021', 
            description:'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
            imageURL:'https://source.unsplash.com/WLxQvbMyfas'
        })
        server.create("van", {id:'3', title: 'Mount Fuji', startDate: '12 Jan, 2021', 
            endDate:'24 Jan, 2021', 
            description:'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
            imageURL:'https://source.unsplash.com/WLxQvbMyfas'
        })

        server.create("van", {id:'4', title: 'Mount Fuji', startDate: '12 Jan, 2021', 
            endDate:'24 Jan, 2021', 
            description:'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
            imageURL:'https://source.unsplash.com/WLxQvbMyfas'
        })

        server.create("van", {id:'5', title: 'Mount Fuji', startDate: '12 Jan, 2021', 
            endDate:'24 Jan, 2021', 
            description:'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
            imageURL:'https://source.unsplash.com/WLxQvbMyfas'
        })

        server.create("van", {id:'6', title: 'Mount Fuji', startDate: '12 Jan, 2021', 
            endDate:'24 Jan, 2021', 
            description:'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
            imageURL:'https://source.unsplash.com/WLxQvbMyfas'
        })
        
    },

    routes(){
        this.namespace = 'api'

        this.get("/vans", (schema) => {
            return schema.vans.all()
          })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
         })
    }
})