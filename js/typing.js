// From tutorial of Traversey Media

class TypeWriter {
    constructor(txtElement, words, wait = 3000){
        this.txtElement = txtElement
        this.words = words
        this.text = ''
        this.index = 0
        this.wait = parseInt(wait, 10)
        this.type()
        this.deleting = false 
    }

    type(){
        // Get the current index
        const current = this.index % this.words.length
        const fullTxt = this.words[current]

        // Check if deleting letter
        if(this.deleting){
            // Remove letter
            this.text = fullTxt.substring(0, this.text.length - 1)
        } else {
            // Add letter
            this.text = fullTxt.substring(0, this.text.length + 1)
        }
        // console.log(this.text)
        this.txtElement.innerHTML = `<span class='txt'>${this.text}</span>`

        // Initial Type Speed
        let typeSpeed = 250
        if(this.deleting){
            typeSpeed /= 3
        }

        // if word's complete
        if(!this.deleting && this.text === fullTxt){
            // Pause at full word
            typeSpeed = this.wait
            this.deleting = true
        } else if(this.deleting && this.text === ''){
            this.deleting = false
            this.index++
            typeSpeed = 500
        }


        setTimeout(()=>this.type(), typeSpeed)
    }
}

document.addEventListener('DOMContentLoaded', init)

function init(){
    const txtElement = document.querySelector('.typing')
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-count')

    new TypeWriter(txtElement, words, wait)
}