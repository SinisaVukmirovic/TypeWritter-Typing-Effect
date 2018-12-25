// // constructor function
// const TypeWritter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false; 
// }

// // Type Method
// TypeWritter.prototype.type = function() {
//     // Current index of word
//     const current = this.wordIndex % this.words.length;
//     // Get full text or current WOrd
//     const fullTxt = this.words[current];

//     // Check if deleting
//     if(this.isDeleting) {
//         // Remove char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // Add a char
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     // Insert txt into txtElement
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Initial Type Speed - will be dynamic and change
//     let typeSpeed = 200;

//     if(this.isDeleting) {
//         typeSpeed /= 2;
//     }
//     // If word is complete
//     if(!this.isDeleting && this.txt === fullTxt) {
//         // Make a pause at end
//         typeSpeed = this.wait;
//         // Set delete to true
//         this.isDeleting = true;
//     }
//     else if(this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         // Move to next words
//         this.wordIndex++;
//         // Pause before start typing
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);
// }

// // Init on DOM load
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     // Init the TypeWritter
//     new TypeWritter(txtElement, words, wait);
// }

///////////////////////////////////////////////////////////////////////////

// Same but with using ES6 JS class

class TypeWritter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false; 
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text or current WOrd
        const fullTxt = this.words[current];

        // Check if deleting
        if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add a char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into txtElement
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed - will be dynamic and change
        let typeSpeed = 200;

        if(this.isDeleting) {
            typeSpeed /= 2;
        }
        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Make a pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        }
        else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next words
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init on DOM load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init the TypeWritter
    new TypeWritter(txtElement, words, wait);
}