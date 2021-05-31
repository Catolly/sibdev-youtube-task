import UserService from '@/services/UserService'

const ID_FAVOURITES_KEY = "id_favourites"

export function getFavourites() {
  const user = UserService.getUser()
  const favourites = localStorage.getItem(ID_FAVOURITES_KEY + user.id)
  if (favourites && favourites !== 'undefined') 
  return JSON.parse(favourites)
  else 
  return []
}

export function addFavourite(favourite) {
  const favourites = getFavourites()
  favourite.id = Date.now()
  favourites.push(favourite)
  saveFavourites(favourites)
}

export function editFavourite(editingFavourite) {
  let favourites = getFavourites()
  favourites = favourites.map(favourite => {
  	if (favourite.id === editingFavourite.id)
  		return editingFavourite
    return favourite
  })
  saveFavourites(favourites)
}

export function deleteFavourite(delitingFavourite) {
	let favourites = getFavourites()
  favourites = favourites.filter(favourite => 
  	favourite.id != delitingFavourite.id
  )
  saveFavourites(favourites)
}

function saveFavourites(favourites) {
  const user = UserService.getUser()
  localStorage.setItem(ID_FAVOURITES_KEY + user.id, JSON.stringify(favourites))
}

export default { getFavourites, addFavourite, editFavourite, deleteFavourite }
