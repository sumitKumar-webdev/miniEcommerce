
// fetching Cart Data from local storage 
const cartDatafromLS = () =>{
const data = localStorage.getItem('cartItems')
if (data) {
    return JSON.parse(data)
}
return undefined
}

//saving data in local storage
const saveDatatoLS = (state) =>{
    const cartData = JSON.stringify(state);
    localStorage.setItem('cartItem', cartData)
}
