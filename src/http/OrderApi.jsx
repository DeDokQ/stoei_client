import {$host} from "./index";
import {jwtDecode} from "jwt-decode"
import {formToJSON} from "axios";

export const addNew = async (formValues, titleNew,
                               descriptionNew, underNew,
                               uploadDate, endEvent,
                               userId) => {

    userId = String(userId)
    try {
        await $host.post('news/newNew', {
            title: titleNew, description: descriptionNew, under: underNew,
            uploadDate: uploadDate, endEvent: endEvent, userId
        })

        formValues.map(async (element) => {

            let title = element.title
            let sub_title = element.sub_title
            let main_text = element.main_text
            let description = element.description
            let under = element.under

            await $host.post('newbox/newNewbox', {
                title: title, sub_title: sub_title, main_text: main_text, description: description, under: under
            })
        })
    } catch (BAD_REQUEST) {
        console.log(BAD_REQUEST)
    }
}

export const getAllNews = async () => {
    try {
        let data = fetch('http://localhost:8080/news/allNews', {
            method: "GET"
        })

        return data
    } catch (e) {
        console.log(e)
    }
}

export const editNewBox = async (formValues, boxID) => {
    try {
        await $host.post('newbox/editNewBox', {
            title: formValues.title, sub_title: formValues.sub_title,
            main_text: formValues.main_text, description: formValues.description,
            under: formValues.under, boxId: boxID
        })
    } catch (e) {
        console.log(e)
    }
}