import {getAllNews, getOrders} from "./http/OrderApi";

export const exportMyNews = async () => {
    let data = await getAllNews();
    let result = await data.json();

    if (result.length === 0) {
        console.log("ПИЗДА");
        return "Пусто"
    } else {
        console.log("res ", result);
        console.log("YT ПИЗДА");
        return result;
    }

}