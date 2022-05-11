import { getWalkers, getCities} from "./database.js"
// imported the new function getCities from the database. 

const walkers = getWalkers()
// invoked the getCites function 
const cities = getCities()

// updated the existing cityList function to use the updated city list. 
export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

