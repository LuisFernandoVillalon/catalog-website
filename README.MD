# Pokemon PC

Project: A Pokemon catalogue website created with the intentions to display my web development skills and comprehension in data structures such as arrays and objects.

# Summary:

The application allows a user to choose from all 898 Pokemon to display in their collection. When a Pokemon is added to the user's personal computer (PC) the application stores it in an array in the computer's local memory. The application allows a user to add a Pokemon, by serching their name or Pokedex entry number, delete a Pokemon from their personal computer, and filter how to view the Pokemon in their collection by their type. Each card in the grid displays the Pokemon's name, image, type(s), and short description. The data of all Pokemon is stored in an array in a seperate file. The data array consists of objects, with nested objects storing different information for each Pokemon. The header and input form have a keyframe animation and the Pokemon cards are display with CSS grid. 

# Technologies

HTML, CSS, JavaScript, module, forms, animations, data structures, arrays, objects


# Challenges

A challenged I faced when creating this application was creating the user interface for the form used to add a new Pokemon. I wanted the form to stand apart from the rest of the page without having the need to create or redirect the user to a new page. I decided to implement the form on a higher z-index from the rest of the page and display a black screen behind. Used a for-loop to traverse the array containing all the information of the Pokemon. Once a match was found with the user's pick, the .push() method was used to add the new Pokemon to the user's collection array and the .splice() method was used to remove the selected Pokemon. A select form was used to update a value that determines which type of Pokemon will be displayed in the grid. The user's collection array is stored locally. 



