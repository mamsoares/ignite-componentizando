import { createContext, useContext, useState, ReactNode } from "react";

interface GenresContextData {
    selectedGenreId: number;
    setSelectedGenreId: (id: number) => void;
}

interface GenericProps {
    children: ReactNode
}
const GenresContext = createContext<GenresContextData>({} as GenresContextData);

export function GenresProvider({ children }: GenericProps) {
    
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    return (
        <GenresContext.Provider value={{ selectedGenreId, setSelectedGenreId }}>
            {children}
        </GenresContext.Provider>
    );
    
}

export const useGenres = () => useContext(GenresContext);
