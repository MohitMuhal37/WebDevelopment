const addMovieModel = document.getElementById('add-modal');
const addStartMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancleMovieBtn = document.querySelector('.btn--passive');
const addMovieBtn = document.querySelector('.btn--success');
const userInput = document.querySelectorAll('input');
const enterySection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const movies = [];

console.log(userInput)

const updateUi = () => {
    if(movies.length === 0) {

    }else{
        enterySection.style.display = 'none';
    }
};

const backdropClickHandlers = () => {
    closeMovieModal();
    cancleMovieDeletion();
    clearMoviesInput();
}

const cancleMovieDeletion = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovie = (movieId) => {
   let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    cancleMovieDeletion();
};


const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancleDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletion =  deleteMovieModal.querySelector('.btn--danger');


    confirmDeletion.replaceWith(confirmDeletion.cloneNode(true))

    confirmDeletion =  deleteMovieModal.querySelector('.btn--danger');
    // confirmDeletion.removeEventListener('click',deleteMovie.bind(null, movieId));
    cancleDeletionBtn.removeEventListener('click', cancleMovieDeletion);
    cancleDeletionBtn.addEventListener('click',cancleMovieDeletion);
    confirmDeletion.addEventListener('click',deleteMovie.bind(null, movieId));
};

const newMovieElement = (title, imageUrl, rating, id) => {
    const movieElement = document.createElement('li');
    movieElement.className = 'movie-element';
    movieElement.innerHTML = `
    <div class = "movie-element__image">
    <img src = "${imageUrl}" alt = "${title}">
    </div>

    <div class = "movie-element__info">
    <h2>${title} </h2>
    <p>${rating} / 5 stars</p>
    </div>
    `;

    movieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(movieElement);
};

// this function is used to dull the opacity of form
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};


const closeMovieModal = () => {
    addMovieModel.classList.remove('visible');
};

// this function is used to show the form in which we can add our fav movies
const showMovieModal = () => {
    addMovieModel.classList.add('visible');
    toggleBackdrop();
};

// in this function we are able to move back our current state
const backdropClickHandler = () => {
    closeMovieModal();
    cancleMovieDeletion();
};

// using this function we are able to use cancle btn in-side a div
const cnacleAddMovie = () => {
      closeMovieModal();
      toggleBackdrop();
      clearMoviesInput();
};

//Clear the  input Screen
const clearMoviesInput = () => {
   for(const userInp of userInput){
      userInp.value = '';
   }
};


const addMovieHandler = () => {
    const titleValue = userInput[0].value;
    const imageUrlValue = userInput[1].value;
    const ratingValue = userInput[2].value;

    if(titleValue.trim() === '' || imageUrlValue === '' || ratingValue === '' || +ratingValue < 1 || +ratingValue > 5){
        alert('Please enter valid values (rating between 1 and 5). ')
    }

    const newMovie = {
        id : Math.random.toString(),
        title : titleValue,
        imageUrl : imageUrlValue,
        rating : ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    updateUi();
    clearMoviesInput();
    newMovieElement(
        newMovie.title,
        newMovie.imageUrl,
        newMovie.rating,
        newMovie.id);
};


addStartMovieBtn.addEventListener('click', showMovieModal);
cancleMovieBtn.addEventListener('click', cnacleAddMovie);
addMovieBtn.addEventListener('click', addMovieHandler);
backdrop.addEventListener('click', backdropClickHandler);