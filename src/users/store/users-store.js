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
    throw new Error('Not yet implemented');
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

