import {getOrders} from "./http/OrderApi";

export const exportMyOrders = async () => {
    // let dataArray = [];
    let data = await getOrders(localStorage.getItem("id"));

    let result = await data.json();

    // result.forEach(nevs => {
    //     nevs.newssubs.forEach(newssub => {
    //         console.log(newssub);
    //     })
    // })

    return result;
    // return dataArray;
}