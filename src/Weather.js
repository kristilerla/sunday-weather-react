import React from "react";
import axios from 'axios';
import { Hearts } from 'react-loader-spinner'
;

export default function Weather (props){
   
    function handleResponse(response){
        return
        <div > <h2> (`the weather in ${response.data.name} is ${response.data.main.temp} °C`);
        </h2>
        </div>
            }
        


            let apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
            return (<Hearts
                height="80"
                width="80"
                color="pink"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />)
       
};
  
  
