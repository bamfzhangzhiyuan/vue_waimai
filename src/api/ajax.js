import axios from "axios"

export default function (url,data={},method="GET") {

  let promise
  if(method === "GET"){

    promise = axios.get(url,{
      params:data
    })
  }else{

    promise = axios.post(url,data)
  }
  return new Promise((reslove,reject)=>{
    promise
      .then(
        (res) =>{
          reslove(res.data)
        }
      )
      .catch(
        (err) =>{
          alert(err)
        }
      )

  })


}

