# Pokemon PC

Project: A Pokemon catalogue website created with the intentions to display my web development skills and comprehension in data structures such as arrays and objects.

# Summary:

The application allows a user to choose from all 898 Pokemon to display in their collection. When a Pokemon is added to the user's personal computer (PC) the application stores it in an array in the computer's local memory. The application allows a user to add as many Pokemon as they want, by serching their name or Pokedex entry number, delete a Pokemon from their personal computer, and filter how to view the Pokemon in their collection by their type. Each card in the grid displays the Pokemon's name, image, type(s), and short description. The data of all Pokemon is stored in an array in a seperate file. The data array consists of objects, with nested objects storing different information for each Pokemon. The header and input form have a keyframe animation and the Pokemon cards are display with CSS grid. 

# Technologies

HTML, CSS, JavaScript, module, forms, animations, data structures, arrays, objects


# Features

## HTML
- Text input forms were used to acquire user input. 
- A select form was used to filter the data to be displayed. 
- A grid was used to display a infinited amount of Pokemon cards. 

## CSS 
- When the page loads the header title, the add button, and the select form have a movement keyframe animation.
- When the user hovers over the image of a Pokemon the image increases in size with a transition and transform animation. 
- Depending on the Pokemon's type, the font color changes for the type text. 
- When the user hovers a button, the button changes color giving a user a warning. 

## JavaScript
- The application uses local storage to save the collection array of Pokemon in the user's computer. 
- A user may add as many Pokemon as they want to their collection from all 898 of them with either their name or Pokedex number.
- A user may choose to view Pokemon only from a certain type. 
- A user may decide to "release" or delete any Pokemon they want.
- A for-loop along side a grid element was used to display an infinite amount of Pokemon cards.
- Each card contains a Pokemon's number, name, iamge, type array, and short description along a "release" button. 


