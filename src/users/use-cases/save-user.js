import { User } from '../models/user';

/**
 * 
 * @param {Like<user>} userLike 
 */
export const saveUser = async( userLike ) => {
    
    const user = new User( userLike );

    // TODO: Falta mapper

    if( user.id ) {
        throw 'Update not implemented yet';
        return;
    }

    const updatedUser = createUser( user );
    return updatedUser;
}


/**
 * 
 * @param {Like<user>} user 
 */
const createUser = async( user ) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const res = await fetch( url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log( {newUser} );
    
    return newUser;
}