import { getWalkerCities, getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [, walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    // invoking functions 
                    const filteredAreas = filterCities(walker)
                    const citiesWalkerWorks = cityNames(filteredAreas)
                    window.alert(`${walker.name} services: ${citiesWalkerWorks}`)
                }
            }
        }
    }
)


// defining 2 functions that will display the city names of each dog walker, both functions are being put into the click event for loop 
// to do this will need two functions one to put the walker cities into an array 
// the next function will then use that array to create a string of cities to use in the click function string

// defining a function to create an array, it has one parameter of walker, the walker parameter is from the for loop on line 28
export const filterCities = (walker) => { 
    let filteredAreas = []
    // iterating thru the walkerCities array to match the walker.id primary key in the walkers section in the database to the area.cityId for the walkerCity database, 
        for (const area of walkerCities) {
            if(walker.id === area.walkerId) {
            // pushing the object to the area.
            filteredAreas.push(area)
        }
    }
    return filteredAreas
}

// function is making the cities in the array in the filterCities function into a string, keep in mind this function is already in a forof loop on line 28 when it is called. 
//  to make the sting print a little cleaner used added an array and used .join. in the return is where the string is formed.
export const cityNames = (filteredAreas) => { 
    let cityArray = []
    // iterating thru the filteredAreas array created by the filterCities function 
    for (const area of filteredAreas) { 
        // iterating thru the cities array
        for (const city of cities) { 
            // if statement to match the cityIds to add the city name to the the array.
            if(area.cityId === city.id) { 
                cityArray.push(city.name)
            }
        }
    }
    return cityArray.join(", ")
}

