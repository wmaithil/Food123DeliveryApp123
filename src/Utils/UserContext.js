import {createContext} from 'react';

const UserContext = createContext({
    searchText : "",
    buttonClicked : false,
});

export default UserContext;