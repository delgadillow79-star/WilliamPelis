// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS DE PELÍCULAS ---
    // Un array de 30 objetos, cada uno representando una película.
    const movies = [
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
        { title: 'Gladiator', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW71rofXvt2YZQSmuvmy7jID9A1RiJaW6Lw&s' },
        { title: 'The Lion King', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmfSO6UX2HxUiPN9r_CzgZvf6NtDhYK18OQ&s' },
        { title: 'Whiplash', imageUrl: 'https://image.tmdb.org/t/p/original/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg' },
        { title: 'Spirited Away', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdk5P8WNDuq8HO3FgBiJ4reyOFqQ4WyQD9KA&s' },
        { title: 'Saving Private Ryan', imageUrl: 'https://m.media-amazon.com/images/I/61gaF5HLedL._UF894,1000_QL80_.jpg' },
        { title: 'Coco', imageUrl: 'https://i.pinimg.com/736x/52/40/93/52409341203bb9276ec911ebbda4f91d.jpg' },
        { title: 'Django Unchained', imageUrl: 'https://imusic.b-cdn.net/images/item/original/623/5709165035623.jpg?franco-nero-2018-django-4k-uhd-blu-ray&class=scaled&v=1547399353' },
        { title: 'The Departed', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg' },
        { title: 'Alien', imageUrl: 'https://imusic.b-cdn.net/images/item/original/816/5056719200816.jpg?2024-alien-romulus-4k-uhd-blu-ray&class=scaled&v=1730976061' },
        { title: 'Braveheart', imageUrl: 'https://i.etsystatic.com/18242346/r/il/fe72a9/2412683470/il_570xN.2412683470_oouu.jpg' },
        { title: 'Reservoir Dogs', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJll7uhMCARXlIQgretURnhGDhklq6kKUlvA&s' },
        { title: 'Mad Max: Fury Road', imageUrl: 'https://m.media-amazon.com/images/I/81oVCop+D5L._UF1000,1000_QL80_.jpg' },
        { title: 'Oldboy', imageUrl: 'https://images.justwatch.com/poster/307127001/s718/old-boy.jpg' },
        { title: 'Kill Bill: Vol. 1', imageUrl: 'https://pics.filmaffinity.com/kill_bill_volume_1-216872360-large.jpg' },
        { title: 'Eternal Sunshine', imageUrl: 'https://gruv.com/cdn/shop/files/GDC100084.jpg?v=1755518021' },
        { title: 'V for Vendetta', imageUrl: 'https://m.media-amazon.com/images/I/71uGBzbTbYL.jpg' },
        { title: 'Zodiac', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagTve7ADL55Yk5mL0FUnOCFGa8HR1a7w24A&s' },
        { title: 'No Country for Old Men', imageUrl: 'https://m.media-amazon.com/images/I/81NXpDqn0VL._UF1000,1000_QL80_.jpg' }
    ];

    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const navInicio = document.getElementById('nav-inicio');
    const navBuscar = document.getElementById('nav-buscar');
    const inicioSection = document.getElementById('inicio-section');
    const buscarSection = document.getElementById('buscar-section');
    const movieGridInicio = document.getElementById('movie-grid-inicio');
    const movieGridBuscar = document.getElementById('movie-grid-buscar');
    const searchInput = document.getElementById('search-input');
    const alphabetFilterContainer = document.getElementById('alphabet-filter');
    const noResultsMessage = document.getElementById('no-results');

    let activeFilterButton = null;

    // --- FUNCIÓN PARA MOSTRAR PELÍCULAS ---
    // Recibe un array de películas y un contenedor, y los renderiza en el DOM.
    const displayMovies = (movieList, container) => {
        container.innerHTML = ''; // Limpiar el contenedor
        
        if (movieList.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
        
        movieList.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `<img src="${movie.imageUrl}" alt="${movie.title}">`;
            container.appendChild(movieCard);
        });
    };

    // --- FUNCIÓN PARA CAMBIAR ENTRE SECCIONES ---
    const showSection = (sectionToShow) => {
        // Ocultar todas las secciones
        inicioSection.classList.remove('active');
        buscarSection.classList.remove('active');
        // Quitar clase activa de los botones
        navInicio.classList.remove('active');
        navBuscar.classList.remove('active');

        if (sectionToShow === 'inicio') {
            inicioSection.classList.add('active');
            navInicio.classList.add('active');
        } else {
            buscarSection.classList.add('active');
            navBuscar.classList.add('active');
            // Al cambiar a "Buscar", mostramos todas las películas por defecto
            displayMovies(movies, movieGridBuscar);
        }
    };

    // --- LÓGICA DE BÚSQUEDA Y FILTRADO ---
    // Función para filtrar películas y actualizar la vista
    const filterAndDisplay = () => {
        const searchTerm = searchInput.value.toLowerCase();
        let filteredMovies = movies;

        if (activeFilterButton) {
            const letter = activeFilterButton.textContent;
            filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().startsWith(letter.toLowerCase()));
        }

        if (searchTerm) {
            filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        }

        displayMovies(filteredMovies, movieGridBuscar);
    };

    // --- GENERACIÓN DEL FILTRO DE ALFABETO ---
    const createAlphabetFilter = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        alphabet.forEach(letter => {
            const button = document.createElement('button');
            button.textContent = letter;
            button.addEventListener('click', () => {
                // Si el botón presionado ya estaba activo, se desactiva
                if (button === activeFilterButton) {
                    button.classList.remove('active-filter');
                    activeFilterButton = null;
                } else {
                    // Si otro botón estaba activo, se desactiva
                    if (activeFilterButton) {
                        activeFilterButton.classList.remove('active-filter');
                    }
                    // Se activa el nuevo botón
                    button.classList.add('active-filter');
                    activeFilterButton = button;
                }
                filterAndDisplay(); // Volver a filtrar con la nueva letra
            });
            alphabetFilterContainer.appendChild(button);
        });
    };
    
    // --- EVENT LISTENERS ---
    navInicio.addEventListener('click', () => showSection('inicio'));
    navBuscar.addEventListener('click', () => showSection('buscar'));
    searchInput.addEventListener('input', filterAndDisplay);

    // --- INICIALIZACIÓN DE LA APP ---
    const initializeApp = () => {
        displayMovies(movies, movieGridInicio);
        createAlphabetFilter();
        showSection('inicio'); // Mostrar la sección de inicio por defecto
    };

    initializeApp();
});