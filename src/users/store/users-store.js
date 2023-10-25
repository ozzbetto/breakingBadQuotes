import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    await loadUsersByPage( state.currentPage + 1);
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

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}

