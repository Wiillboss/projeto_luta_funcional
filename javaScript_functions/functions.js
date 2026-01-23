//Personagem padrão e sus propriedades.
const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    desense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        desense: 3
    }
}