import userStore from './store/users-store'
/**
 * 
 * @param {HTMLDivElement} elemento
 */
export const UserApp = async( element ) => {
    element.innerHTML = 'Loading...';
    await userStore.loadNextPage(); 
    
    console.log( userStore.getUsers() );
    
}
