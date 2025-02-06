import axios from "axios";

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