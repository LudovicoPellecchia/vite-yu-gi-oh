import axios from "axios"
import { reactive } from "vue";

export const store = reactive({
    cardList:[]
    
});


export function getCardFromApi() {
    const url ="https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"
    
    axios.get(url).then((response) => {         
        store.cardList.push(...response.data.data)
    })
}
