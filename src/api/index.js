import ajax from "./ajax"

const BASE = '/api'

export const reqAddress = (longitude, latitude)=>{return ajax(BASE+`/position/${latitude},${longitude}`)}

export const reqCategorys = ()=>{return ajax(BASE + '/index_category')}

export const reqShops = ({longitude,latitude})=>{return ajax(BASE + "/shops",{latitude,longitude})}
