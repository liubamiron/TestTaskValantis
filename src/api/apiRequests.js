import axios from 'axios';
import { HOST } from "./constants";
import md5 from "md5";

export const basePath = HOST;

const dateObj = new Date();
const month   = dateObj.getUTCMonth() + 1; // months from 1-12
const day     = dateObj.getUTCDate();
const year    = dateObj.getUTCFullYear();

export const currentDate = year + '' + month + '' +day;

const stamp = new Date().toISOString().slice(0,10).replace(/-/g,"");
const password = 'Valantis'

const hash = md5(`${password}_${stamp }`);



export const myAxios = axios.create({
    baseURL: basePath,
    timeout: 4000,
    // headers: { "X-Auth": hash },
    // headers: { "X-Custom-Header": "foobar" },
  });


//GET get all products

export function getProducts()  {

    let body = JSON.stringify({"action":"get_ids"});

    return axios
        .post('https://api.valantis.store:41000', body,
        {
            headers : {
                'Content-Type': 'application/json', 'X-Auth': hash
            },
        })
        .then((response) => response.data)
        .catch(function (error) {
            console.log("Throw exception: ", error);
        });
}

export function getProductsItem()  {

    let body = JSON.stringify({"action":"get_items"});

    return axios
        .post('https://api.valantis.store:41000', body,
            {
                headers : {
                    'Content-Type': 'application/json', 'X-Auth': hash
                },
                params: {"ids": ["1789ecf3-f81c-4f49-ada2-83804dcc74b0"]}
            })
        .then((response) => response.data)
        .catch(function (error) {
            console.log("Throw exception: ", error);
        });
}

export function getProducts2() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Auth", hash);

    let raw = JSON.stringify({"action": "get_ids"});

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.valantis.store:41000", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export function getProducts3() {
    let data = JSON.stringify({"action":"get_ids"});

    let config = {
        method: 'post',
        url: 'https://api.valantis.store:41000',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth': hash
        },
        data : data
    };

    return axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}