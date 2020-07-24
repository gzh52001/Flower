function getLocal(){
    return JSON.parse(localStorage.getItem('userinfo')) || ''
}

function setLocal(data){
    return localStorage.setItem('userinfo',JSON.stringify(data))
}

function deleteLocal(key){
    return localStorage.removeItem(key)
}
export {
    getLocal,
    setLocal,
    deleteLocal
}