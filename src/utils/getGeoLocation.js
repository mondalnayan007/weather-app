

export  const getGeoLocation = async (value)=>{
    const url = `https://photon.komoot.io/api/?q=${value}&limit=1`

    const result = await fetch(url);
    const data = await result.json();
    const coordinates = data.features[0].properties;
    const lat = coordinates.extent[1];
    const lon = coordinates.extent[0];
    return({
        name:coordinates.name,
        latitude:lat,
        longitude:lon
    })


    
}