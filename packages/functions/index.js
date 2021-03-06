/** @module two */
/**
 * Get random item from array
 * 
 * @public
 * @function
 * @param {*[]} arr - Array of items
 * @returns {*}
 */
export function getRandomItemFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
