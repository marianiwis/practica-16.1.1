async function fetchCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        displayCharacters(data.results); // Utilizamos data.results para obtener la lista de personajes
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
        document.getElementById('characters').innerHTML = 'Error al cargar personajes';
    }
}

function displayCharacters(characters) {
    const container = document.getElementById('characters');
    if (!characters || characters.length === 0) {
        container.innerHTML = 'No se encontraron personajes.';
        return;
    }
    
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character');
        characterDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <div>
                <h3>${character.name}</h3>
                <p>Especie: ${character.species}</p>
                <p>Estado: ${character.status}</p>
                <p>Género: ${character.gender}</p>
            </div>
        `;
        container.appendChild(characterDiv);
    });
}

// Llamar a la función para obtener personajes
fetchCharacters();
