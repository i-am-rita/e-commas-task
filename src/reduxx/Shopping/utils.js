export const addToCart = (item, cartItems) => {
    const itemExist = cartItems.some(prod => prod.id === item.id)
    if (itemExist) {
        const newCart = cartItems.map(prod => {
            return prod.id === item.id ? { ...prod, qty: prod.qty + 1 } : prod
        })
        return newCart
    }

    return [...cartItems, { ...item, qty: +1 }]
}


export const removeFromCart = (item, cartItems) => {
    if (item.qty > 1) {
        const newCart = cartItems.map(prod => {
            return prod.id === item.id ? { ...prod, qty: prod.qty - 1 } : prod
        })
        return newCart
    }
    const remove = cartItems.filter(prod => {
        return prod.id !== item.id
    })
    return remove
}

export const addFavorites = (item, favoriteItems) => {
    const is_fav = favoriteItems.some(prod =>
        prod.id === item.id)
    if (is_fav) {
        // let is_fav = false
        const favorite = favoriteItems.filter(prod => {
            return prod.id !== item.id
            // return prod.id === item.id 
        })
        return favorite
    }
    return [...favoriteItems, item]
}


// declare a function that takes in 2 parameters 
// check if item exist
// if exist increste the quantity by 1
// if doesnt, push to array and set quantity to 1