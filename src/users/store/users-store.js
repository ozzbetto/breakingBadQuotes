

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    throw new Error('Not yet implemented');
}

const loadPreviuosPage = async() => {
    throw new Error('Not yet implemented');
}

// TODO: implementar
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