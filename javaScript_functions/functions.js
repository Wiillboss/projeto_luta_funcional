//Personagem padrão e sus propriedades.
const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    desense: 0
}

//O nome entre parentese determina que já vai exister um nome para o personagem
//No caso dos monstros, ambos vai vazio e o atributo (name) vai com seus nomes especificos.
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

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: "Little Monster",
        life: 40,
        maxLife: 40,
        attack: 4,
        desense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: "Big Monster",
        life: 120,
        maxLife: 120,
        attack: 16,
        desense: 6
    }
}