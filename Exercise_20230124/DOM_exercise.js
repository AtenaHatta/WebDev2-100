/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
// const el = document.getElementById('p.el');
// el.setAttribute('style','background-color: yellow')

// var count = el.textContent;
// const len = 8;
// if(count.length > len){
//   el.style.backgroundColor = "yellow";
// }
// document.getElementById('el').classList.add('changeBg');


const characters = document.querySelector("p")
characters.innerHTML=characters.innerText
.split(' ')
.map(word => word.length >8 ? `<span style="background-color: yellow"> ${word}</span>"`:word)
.join(' ');


/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

const link = document.querySelector("a")
link.innerText = 'Text';
document.body.appendChild(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/



/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
