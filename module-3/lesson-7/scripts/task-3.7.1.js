/*----Variables----*/
const arrAnimalFilters = document.querySelectorAll('.animalFilter');
const arrAnimalImages = document.querySelectorAll('.animalImage');
//console.log(arrAnimalFilters);

/*---- Event Listeners----*/
for(counter=0; counter < arrAnimalFilters.length; counter++){
    // console.log(counter);
    let currentFitler = arrAnimalFilters[counter];
    // console.log(currentFilter);
    currentFitler.addEventListener('click',filterImages);
}

/*----Functions----*/
function filterImages(event){
    // console.log(event.target.innerHTML);
    var animalName = event.target.innerHTML.toLowerCase();
    // console.log(animalName);
    for(counter=0; counter < arrAnimalImages.length; counter++){
        let currentImage = arrAnimalImages[counter];
        currentImage.style.display = 'none';
        // console.log(currentImage);
        if(animalName == 'all'){
            currentImage.style.display = 'inline';
        } else {
            let currentImageAnimal = currentImage.getAttribute('animal');
            // console.log(currentImageAnimal);
            if(currentImageAnimal == animalName){
                currentImage.style.display = 'inline';
            }
        }
    }
}