

export const getGifs = async( category ) => {
        
    const Api_Key = 'UEQyopZn4gyMQJr4zJ8b6HXcmThlN9jZ';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${Api_Key}`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

}