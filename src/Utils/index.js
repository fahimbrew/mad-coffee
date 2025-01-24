// get all the items



const getAllFavorites = ()=>{
   const all = localStorage.getItem("favorites");
//    console.log(all)
   if(all){
    const favorites = JSON.parse(all);
    return favorites;
   }else{
    return [];
   }
}


// add items

const addFavorites = (coffee)=>{
   const favorites = getAllFavorites();
   const isExist = favorites.find(item=>item.id==coffee.id);
   if(isExist) return alert("Already Exist")
   favorites.push(coffee);
   localStorage.setItem("favorites",JSON.stringify(favorites));
   alert("Successfully added")
}




// remove items
const removeFromFav = id =>{
    const favorites = getAllFavorites();
    const remainig = favorites.filter(item=>item.id!==id);
    localStorage.setItem("favorites",JSON.stringify(remainig));

}


export {getAllFavorites,addFavorites,removeFromFav}