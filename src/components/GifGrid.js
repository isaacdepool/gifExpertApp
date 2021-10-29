import { GifGridItem } from "./GifGridItem";

import { useFechGifs } from "../hooks/useFechGifs"

export const GifGrid = ( {category} ) => {

    const { data, loading } = useFechGifs( category );

    return (
        <>
        <h3> {category} </h3>
        { loading && <p>Loanding...</p>}

        <div className="card-grid">
                {
                    data.map( img =>
                    <GifGridItem
                        key={img.id}
                        { ...img }
                     />
                )}
        </div>
        </>
    )
}
