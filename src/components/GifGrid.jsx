import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log({isLoading});


    return (
        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            /* title={ image.title }
                            url={ image.url } o:*/
                            { ...image} //todas las propiedades de image

                            />
                    ))
                }
            </div>

        </>
    )
}
