// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS DE PELÍCULAS ---
    // Un array de 30 objetos, cada uno representando una película.
    const movies = [
        { title: 'Inception', imageUrl: 'https://m.media-amazon.com/images/I/919mVr6ikcL._UF894,1000_QL80_.jpg' },
        { title: 'The Shawshank Redemption', imageUrl: 'https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg' },
        { title: 'The Dark Knight', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Pulp Fiction', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Pulp+Fiction' },
        { title: 'Forrest Gump', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Forrest+Gump' },
        { title: 'The Matrix', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=The+Matrix' },
        { title: 'Goodfellas', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Goodfellas' },
        { title: 'Interstellar', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Interstellar' },
        { title: 'Parasite', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Parasite' },
        { title: 'Joker', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Joker' },
        { title: 'Avengers: Endgame', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Avengers' },
        { title: 'Back to the Future', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Back+to+the+Future' },
        { title: 'Gladiator', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Gladiator' },
        { title: 'The Lion King', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=The+Lion+King' },
        { title: 'Whiplash', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Whiplash' },
        { title: 'Spirited Away', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Spirited+Away' },
        { title: 'Saving Private Ryan', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Saving+Private+Ryan' },
        { title: 'Coco', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Coco' },
        { title: 'Django Unchained', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Django' },
        { title: 'The Departed', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=The+Departed' },
        { title: 'Alien', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Alien' },
        { title: 'Braveheart', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Braveheart' },
        { title: 'Reservoir Dogs', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Reservoir+Dogs' },
        { title: 'Mad Max: Fury Road', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Mad+Max' },
        { title: 'Oldboy', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Oldboy' },
        { title: 'Kill Bill: Vol. 1', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Kill+Bill' },
        { title: 'Eternal Sunshine', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Eternal+Sunshine' },
        { title: 'V for Vendetta', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=V+for+Vendetta' },
        { title: 'Zodiac', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Zodiac' },
        { title: 'No Country for Old Men', imageUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=No+Country' }
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