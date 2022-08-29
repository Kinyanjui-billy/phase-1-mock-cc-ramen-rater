// write your code here
const arrayOfRamenObjects = []

fetch('http://localhost:3000/ramens')
.then(function(response){
    return response.json()
})
.then(function(data){
    data.forEach(renderImages)

    document.querySelector(`img[alt='${arrayOfRamenObjects[0]['name']}']`).click()

    const form = document.querySelector('#new-ramen')
    form.addEventListener('submit',function(event){
    event.preventDefault()
    const newRamenObj = {
        'id': arrayOfRamenObjects[arrayOfRamenObjects.length-1]['id']+1,
        'name': document.querySelector('#new-name').value,
        'restaurant': document.querySelector('#new-restaurant').value,
        'image': document.querySelector('#new-image').value,
        'rating': document.querySelector('#new-rating').value,
        'comment': document.querySelector('#new-comment').value
    }
    renderImages(newRamenObj)
    arrayOfRamenObjects.push(newRamenObj)
    form.reset()
})
})

function renderImages(ramenObj){
    const ramenImage = document.createElement('img')
    ramenImage.src = ramenObj['image']
    ramenImage.alt = ramenObj['name']
    ramenImage.restaurant = ramenObj['restaurant']
    ramenImage.rating = ramenObj['rating']
    ramenImage.comment = ramenObj['comment']
    ramenImage.addEventListener('click', imageClick)
    document.querySelector('#ramen-menu').appendChild(ramenImage)
    arrayOfRamenObjects.push(ramenObj)
}

function imageClick(){
    document.querySelector('.detail-image').src = this.src
    document.querySelector('.name').textContent = this.alt
    document.querySelector('.restaurant').textContent = this.restaurant
    document.querySelector('#rating-display').textContent = this.rating
    document.querySelector('#comment-display').textContent = this.comment
}


