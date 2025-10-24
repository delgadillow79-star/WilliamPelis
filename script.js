// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    var movies = [
        { title: 'Inception', imageUrl: 'https://m.media-amazon.com/images/I/919mVr6ikcL._UF894,1000_QL80_.jpg' },
        { title: 'The Shawshank Redemption', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9670Mi_MG5ezDhuF-mDPXtisIFZZPiHyzw&s' },
        { title: 'The Dark Knight', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Pulp Fiction', imageUrl: 'https://play-lh.googleusercontent.com/R6EsEaQJa4sd1aPOtogDladldOa_Ku7R9g83qQfk5FG5ySElRgjz9pTcX1ztXkZwdbwWANwIcE6V-1BUbw' },
        { title: 'Forrest Gump', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdqKXBL3df1JKBPA5fvwlDFKASdch1Z0OGA&s' },
        { title: 'The Matrix', imageUrl: 'https://www.phenomena-experience.com/galeria/img_film/film_13509849101.jpeg' },
        { title: 'Goodfellas', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4lre3kvvSDkWq0yifXF8NePLgG_5KUI1AQ&s' },
        { title: 'Interstellar', imageUrl: 'https://w0.peakpx.com/wallpaper/747/660/HD-wallpaper-interstellar-movie.jpg' },
        { title: 'Parasite', imageUrl: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/12693286-1194851883693881.jpg' },
        { title: 'Joker', imageUrl: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202410/04/00125980921768____2__640x640.jpg' },
        { title: 'Avengers: Endgame', imageUrl: 'https://images.static-bluray.com/movies/covers/201536_slip.jpg' },
        { title: 'Back to the Future', imageUrl: 'https://m.media-amazon.com/images/I/51-2MJCIr8L._UF1000,1000_QL80_.jpg' },
   ,
    ];

    var navInicio = document.querySelector('#nav-inicio');
    var navBuscar = document.querySelector('#nav-buscar');
    var inicioSection = document.querySelector('#inicio-section');
    var buscarSection = document.querySelector('#buscar-section');
    var movieGridInicio = document.querySelector('#movie-grid-inicio');
    var movieGridBuscar = document.querySelector('#movie-grid-buscar');
    var searchInput = document.querySelector('#search-input');
    var alphabetFilterContainer = document.querySelector('#alphabet-filter');
    var noResultsMessage = document.querySelector('#no-results');

    var activeFilterButton = null;

    function displayMovies(movieList, container) {
        container.innerHTML = '';
        if (movieList.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
        movieList.forEach(function (movie) {
            var movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = '<img src="' + movie.imageUrl + '" alt="' + movie.title + '">';
            movieCard.addEventListener('click', function () {
                console.log('Película seleccionada:', movie.title);
            });
            container.appendChild(movieCard);
        });
    }

    function showSection(sectionToShow) {
        inicioSection.classList.remove('active');
        buscarSection.classList.remove('active');
        navInicio.classList.remove('active');
        navBuscar.classList.remove('active');

        if (sectionToShow === 'inicio') {
            inicioSection.classList.add('active');
            navInicio.classList.add('active');
        } else {
            buscarSection.classList.add('active');
            navBuscar.classList.add('active');
            filterAndDisplay();
        }
    }

    function filterAndDisplay() {
        var searchTerm = (searchInput.value || '').toLowerCase();
        var filteredMovies = movies.slice();

        if (activeFilterButton) {
            var letter = activeFilterButton.textContent.toLowerCase();
            filteredMovies = filteredMovies.filter(function (movie) {
                return movie.title.toLowerCase().indexOf(letter) === 0;
            });
        }

        if (searchTerm) {
            filteredMovies = filteredMovies.filter(function (movie) {
                return movie.title.toLowerCase().indexOf(searchTerm) !== -1;
            });
        }

        displayMovies(filteredMovies, movieGridBuscar);
    }

    function createAlphabetFilter() {
        var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        alphabet.forEach(function (letter) {
            var button = document.createElement('button');
            button.textContent = letter;
            button.addEventListener('click', function () {
                if (button === activeFilterButton) {
                    button.classList.remove('active-filter');
                    activeFilterButton = null;
                } else {
                    if (activeFilterButton) activeFilterButton.classList.remove('active-filter');
                    button.classList.add('active-filter');
                    activeFilterButton = button;
                }
                filterAndDisplay();
            });
            alphabetFilterContainer.appendChild(button);
        });
    }

    navInicio.addEventListener('click', function () { showSection('inicio'); });
    navBuscar.addEventListener('click', function () { showSection('buscar'); });
    searchInput.addEventListener('input', filterAndDisplay);

    function initializeApp() {
        displayMovies(movies, movieGridInicio);
        createAlphabetFilter();
        showSection('inicio');
    }

    initializeApp();
});
