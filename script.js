//  MANDATORY JS EXERCISES (create a different file for this exercise)
//     1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
//     2) Create an unordered list using JavaScript and save it in a variable
//     3) Cycle the array and create a list-item via JavaScript for every element
//     4) Insert the genere as text in the list-item
//     5) Append the list items in the unordered list
//     6) Append the unordered list in the document. The list should appear in the page.


const genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

const ulNode = document.createElement('ul')

for(let i=0; i<=genres.length; i++) {
    const li =  document.createElement('li')
    li.innerText = genres[i]
    ulNode.appendChild(li)
}

document.body.appendChild(ulNode)