const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

//El evento keyup se ejecuta tan pronto levantael dedo del teclado
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10 )
        randomSelect()
    }
    
})

function createTags(input){
    //Aqui logramos hacer la división de lo escrito por el usuario a traves de las comas y evite crear los arrays que almacenas campos vacios
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''
    tags.forEach(tag => {
       const tagEl = document.createElement('span')
       tagEl.classList.add('tag') 
       tagEl.innerText = tag
       tagsEl.appendChild(tagEl)
    });
}

function randomSelect(){
    const times = 30 

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlighTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        },100)
    },100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag = pickRandomTag()
            highlighTag(randomTag)
        })
    }, times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlighTag(tag){
    tag.classList.add("highlight")
}

function unHighlightTag(tag){
    tag.classList.remove("highlight")
}