import React, { createContext, useState} from 'react';

interface ContextProps {
    books: {title: string, id: number}[]
}

const defaultContextState: ContextProps = {
    books: [
        {title: '', id: 0}
    ]
};

export const BookContext = createContext<ContextProps>(defaultContextState);

interface Props {
    
}
const BookContextProvider: React.FC<Props> = ({ children }) => {
    const [books] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'the way of kings', id: 2},
        {title: 'the final empire', id: 3},
        {title: 'the hero of ages', id: 4}
    ]);

    return (
        <BookContext.Provider value={{books}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;