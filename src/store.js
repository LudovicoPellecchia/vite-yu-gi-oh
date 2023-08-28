import axios from "axios"
import { reactive } from "vue";

export const store = reactive({
    cardList:[],
    archetypes:[],
    
});


export function getCardFromApi() {
    const url ="https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"
    
    axios.get(url).then((response) => {         
        
        store.cardList.push(...response.data.data)
    })
}


export function getArchetypesFromApi(){
    const url ="https://db.ygoprodeck.com/api/v7/archetypes.php"

    

    axios.get(url).then((response) => {

        store.archetypes.push(...response.data.map(item => item.archetype_name));
    })
}
