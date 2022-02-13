export const addToCart = (item, cartItems) => {
    const itemExist = cartItems.some(prod => prod.id === item.id)
    console.log(item)
    console.log(cartItems)
    if (itemExist) {
        const newCart = cartItems.map(prod => {
            console.log(prod.id)
            console.log(item.id)
            return prod.id === item.id ? { ...prod, qty: prod.qty + 1 } : prod
        })
        console.log("newcart", newCart)
        // return  newCart
    }

    return  [...cartItems, {...item, qty: +1}]
    } 


export const removeFromCart = (item, cartItems) =>{
    // const itemExistNot = cartItems.some(prod => prod.id === item.id)
    if(item.qty > 1) {
        const newCart = cartItems.map(prod => {
            return prod.id === item.id ? {...prod, qty: prod.qty - 1} : prod
        })
        return newCart
    }
    return [...cartItems, {...item, qty: -1}]
}

// export const AddExistingItemToCart = ((cartItems, itemToAdd) => {
//     if ()
//     return cartItems.map(item =>
//         item.id === itemToAdd.id ? { ...item, count: item.count + 1 } : item
//     )
// });

// export const adjustQty = (item, cartItems) => {
//     const increaseItem = cartItems.find(prod => prod.id === item.id)
//     if(increaseItem){

//     }
// }



// declare a function that takes in 2 parameters 
// check if item exist
// if exist increste the quantity by 1
// if doesnt, push to array and set quantity to 1