import RickAndMortyService from './service';

// Crear una instancia del servicio RickAndMortyService
const service = new RickAndMortyService();

function createCharacterCard(character) {
    return `
    <div class="character">
    <img class="image"src="${character.image}" alt="${character.name}">
    <div class="character-info">
    <h2>${character.name}</h2>
    <p>${character.status} - ${character.species}</p>
    <p class="subtitulo">Last known location: </p>
    <p>${character.location}</p>
    <p class ="subtitulo">First seen in: </p>
    <p>${character.firstSeen}</p>
    <p class ="info1">${character.student}</p>
    <p class ="info2">${character.code}</p>
    </div>
</div>

    `;
}

function addCharacterListeners(character, container) {
    const characterCard = container.querySelector(`.image[alt="${character.name}"]`);

    // Agregar un evento de clic a la tarjeta
    characterCard.addEventListener('click', () => {
        alert(`Hola, soy ${character.name}`);
    });
}

async function createCharacterList() {
    try {
        const characters = await service.getAllCharacters();
        const characterContainer = document.querySelector('.character-list');

        
        characterContainer.innerHTML = '';

        
        characters.forEach(character => {
            const characterCardHTML = createCharacterCard(character);
            characterContainer.innerHTML += characterCardHTML;
            addCharacterListeners(character, characterContainer);
        });
    } catch (error) {
        console.error('Error al obtener y mostrar los personajes:', error);
    }
}

// Llamar a la función para crear la lista de personajes cuando la página se carga completamente
window.onload = createCharacterList;