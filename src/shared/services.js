export const getRequest = (url) =>{
   return fetch(url,{
    headers : { 
      'Content-Type': 'application/json',
     }
  }).then(res => res.json())
}

export const postRequest = (url,data) =>{
    return fetch(url,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    }).then(res=>res.json());    
}