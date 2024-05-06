import {$host} from "./index";
import {jwtDecode} from "jwt-decode"
import {formToJSON} from "axios";

export const addOrder = async (formValues, titleNew,
                               descriptionNew, underNew,
                               uploadDate, endEvent,
                               userId) => {

    // departurePoint = String(departurePoint)
    // deliveryPoint = String(deliveryPoint)
    // supInformation = String(supInformation)
    // deliveryDate = String(deliveryDate)
    // dispatchDate = String(dispatchDate)
    // totalPrice = String(totalPrice)
    userId = String(userId)
    try {
        await $host.post('order/newOrder', {
            title: titleNew, description: descriptionNew, under: underNew,
            uploadDate: uploadDate, endEvent: endEvent, userId
        })

        formValues.map(async (element) => {

            let title = element.title
            let sub_title = element.sub_title
            let main_text = element.main_text
            let description = element.description
            let under = element.under

            // length = String(length)
            // width = String(width)
            // height = String(height)
            // weight = String(weight)

            await $host.post('cargo/newCargo', {
                title: title, sub_title: sub_title, main_text: main_text, description: description, under: under
            })
        })
    } catch (BAD_REQUEST) {
        console.log(BAD_REQUEST)
    }
}

export const getOrders = async (userId) => {
    try {
        let data = fetch('http://localhost:8080/order/myOrders', {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "userId": userId
            }
         })

        return data
    } catch (e) {
        console.log(e)
    }
}