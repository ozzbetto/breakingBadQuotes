import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage( state.currentPage + 1);
    if ( users.length === 0 ) return

    state.currentPage += 1;
    state.users = users;
    
}

const loadPreviuosPage = async() => {

    // Verifico is ya estoy en la primera página
    if( state.currentPage === 1 ) {
        throw new Error('Ya no hay páginas previas');
    }

    //Intento cargar la página anterior
    const users = await loadUsersByPage(state.currentPage - 1);

    //Si no hay usuarios entonces no hacer nada
    if( users.length === 1 ) return;

    //Actualizo el estado de la página anterior
    state.currentPage -= 1;
    state.users = users;

}


const onUserChanged = () => {
    throw new Error('Not yet implemented');
}

const reloadPage = async() => {
    throw new Error('Not yet implemented');
}


export default {
    loadNextPage,
    loadPreviuosPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}

