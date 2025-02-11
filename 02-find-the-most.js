const petsData = require("./pets-data.js");

/**
 * getHighestPetAge()
 * -----------------------------
 * Returns the highest `age` of all pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The highest `age` of all pets.
 *
 * EXAMPLE:
 *  getHighestPetAge(pets);
 *  > 10
 */
function getHighestPetAge() {}

/**
 * getLowestPetAge()
 * -----------------------------
 * Returns the lowest `age` of all pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The lowest `age` of all pets.
 *
 * EXAMPLE:
 *  getLowestPetAge(pets);
 *  > 1
 */
function getLowestPetAge() {}

/**
 * getHeaviestPet()
 * -----------------------------
 * Returns the pet object with the highest `weightInPounds` of all pets. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} The pet with the highest `weightInPounds`.
 *
 * EXAMPLE:
 *  getHeaviestPet(pets);
 *  > {
        petName: "Gia",
        species: "dog",
        caretakerName: "Steven",
        age: 3,
        favoriteFood: "salami",
        caretakerAge: "34",
        weightInPounds: 25
    }
 */
function getHeaviestPet() {}

/**
 * getLightestPet()
 * -----------------------------
 * Returns the pet object witht the lowest `weightInPounds` of all pets. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} The pet with the lowest `weightInPounds`.
 *
 * EXAMPLE:
 *  getLightestPet(pets);
 *  > {
        petName: "Tuba",
        species: "spotted gecko",
        caretakerName: "Ari",
        age: 2,
        favoriteFood: "mealworms",
        caretakerAge: "26",
        weightInPounds: 0.1
    }
 */
function getLightestPet() {}

/**
 * getLowestCaretakerAge()
 * -----------------------------
 * Returns the `caretakerAge` of the pet with the lowest `caretakerAge`. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The lowest `caretakerAge` of all pets as a number (not a string).
 *
 * EXAMPLE:
 *  getLowestCaretakerAge(pets);
 *  > 17
 */
function getLowestCaretakerAge() {}

/**
 * getNameOfYoungestCaretaker()
 * -----------------------------
 * Returns the `caretakerName` of the pet with the lowest `caretakerAge`. If the inputted `pets` array is empty, return an empty string: ''.
 * @param {Object[]} pets - An array of pets.
 * @returns {string} The `caretakerName` of the pet with the lowest `caretakerAge` of all pets.
 *
 * EXAMPLE:
 *  getNameOfYoungestCaretaker(pets);
 *  > "Katie"
 */
function getNameOfYoungestCaretaker() {}
