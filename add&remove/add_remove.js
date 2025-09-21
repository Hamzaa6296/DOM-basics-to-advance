const btn = document.querySelector('.click')
const parent = document.querySelector('.parent')

function adder (){
    const newli = document.createElement("li")
    newli.innerHTML = 'my name is hamza'
    document.querySelector('.parent').appendChild(newli)
}

btn.addEventListener('click', () => {
    adder()
})