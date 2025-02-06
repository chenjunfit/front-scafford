import axios from "axios";
import {TOKEN_CONFIG} from "../config/index.js";

const request=(url="",method="get",data={},timeout=5000)=>{
    return new Promise((resolve, reject) =>{
        const methodLower=method.toLowerCase()
        if(methodLower==="get"){
            axios({
                url: url,
                method:method,
                params: data,
                timeout: timeout,
            }).then((response)=>{
                resolve(response)
            }).catch((error)=>{
                reject(error)
            })
        }else if(methodLower==="post"){
            axios({
                url: url,
                method:method,
                data: data,
                timeout: timeout,
            }).then((response)=>{
                resolve(response)
            }).catch((error)=>{
                reject(error)
            })
        }
    } )

}
export default request
axios.interceptors.request.use(function (config) {
    //在发送前做些什么
    // config.headers.Authorization = "yyyyyyyyy"
    //添加时间戳在请求中,解决缓存
    if (config.method == "get") {
        let timeStamp = (new Date()).getTime()
        if (config.params) {
            config.params.timestamp = timeStamp
        } else {
            config.params = {
                params: {
                    timestamp: timeStamp
                }
            }
        }
    }
    let TokenValue=""
    try {
        TokenValue=window.localStorage.getItem(TOKEN_CONFIG.TOKEN_NAME)
    }catch (error){
        TokenValue=""
    }
    if(TokenValue == ""||TokenValue==null){
        config.headers[TOKEN_CONFIG.TOKEN_NAME]=""
    }else{
        config.headers[TOKEN_CONFIG.TOKEN_NAME]=TokenValue
    }
    return config

},function (error){
    //请求失败做什么
    return Promise.reject(error)
})
