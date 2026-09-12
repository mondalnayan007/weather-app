

export  const getGeoLocation = async (value)=>{
    const url = `https://photon.komoot.io/api/?q=${value}&limit=1`

    const result = await fetch(url);
    const data = await result.json();
    console.log(data.features);
}