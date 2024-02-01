import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL = 
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwZm9nJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   
    const HOT_URL = 
    "https://images.unsplash.com/photo-1439194850785-37cfb3d7efc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8";
    
    const COLD_URL =
     "https://images.unsplash.com/photo-1579847641267-5445b760b991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fENvbGQlMjB3ZXRoZXIlMjB0b3dufGVufDB8fDB8fHww";
    
     const RAIN_URL = 
    "https://images.unsplash.com/photo-1520699697851-3dc68aa3a474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbiUyMHdldGhlcnxlbnwwfHwwfHx8MA%3D%3D";


    return (
        <div className="InfoBox">
           
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}