import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Kanpur",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return ( 
        <div style={{textAlign: "center" ,backgroundColor:"whitesmoke", border :"1px solid black",height:"100vh" } }>
            <h1 style={{color:"crimson"}}>Weather app by Saurabh</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info ={weatherInfo}/>
        </div>
    )
}