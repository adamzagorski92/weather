const WeatherItem = (props) => {
    return (
    <div className='weatherItem'>
        <h2>{props.weatherItem.stacja}</h2>
        <p className='weatherItem__temperature'>Temperatura: {props.weatherItem.temperatura}°C</p>
        <p className='weatherItem__wind'>Prędkość wiatru: {props.weatherItem.predkosc_wiatru}m/s</p>
        <p className='weatherItem__humidity'>Wilgotność względna: {props.weatherItem.wilgotnosc_wzgledna}%</p>
        <p className='weatherItem__pressure'>Ciśnienie: {props.weatherItem.cisnienie ? props.weatherItem.cisnienie + ' hPa ' : "brak danych"}</p>
    </div>
    )
}

export default WeatherItem;