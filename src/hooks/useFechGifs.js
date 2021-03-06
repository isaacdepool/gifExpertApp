import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFechGifs = ( category ) =>{

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () =>{

        getGifs( category )
            .then( imgs => {

                setTimeout(() => {
                    
                    setstate({
                        data: imgs,
                        loading: false
                    })

                }, 2000);
            });

    }, [ category ]);

    return state; //{ data: [], loading: true}
}