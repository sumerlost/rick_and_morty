// const ID_FAVORITOS = "ID_FAVORITOS"
const GET_FAVORITOS = "GET_FAVORITOS"

export function getFavoritos(obj) {
    return {
        type: GET_FAVORITOS,
        payload: obj
    }

}

export { GET_FAVORITOS }