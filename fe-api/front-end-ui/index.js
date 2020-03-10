document.addEventListener('DOMContentLoaded', () => {
    
    const submitButton = document.querySelector('#submit-button')
    const testButton = document.querySelector('#test-button')
    const whaleOne = document.querySelector('#whale-1')
    let counter = 0

    submitButton.addEventListener('click', (e) => {
        e.preventDefault()
        const wordOne = document.querySelector('#input-1').value 
        const wordTwo = document.querySelector('#input-2').value 
        const wordThree = document.querySelector('#input-3').value 
        console.log(wordOne, wordTwo, wordThree)
    })

    testButton.addEventListener('click', (e) => {
        counter++
        console.log(counter)
        whaleOne.style.transform = "rotate()"


    })


})