import { getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()



// Function whose responsibility is to find the walker assigned to a pet
const findPetWalker = (pet, walkers) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}


export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name}. 
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

// removed the following from line 32 as the property was removed in the database. 
// in ${currentPetWalker.city}


