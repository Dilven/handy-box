import React, { useState } from 'react'
import { InternalApi } from '../../services/internal-api'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useSavedPlaces, useSavedPlacesActions } from '../../providers/SavedPlaces'
import {
  HeartOutlined,
} from '@ant-design/icons';
import { Input, Button } from 'antd';
import { Outfit } from './Outfit';

const { Search } = Input;

export const WeatherCard = () => {
  const { items: savedPlaces } = useSavedPlaces();

  const savedPlacesItems = Object.values(savedPlaces).map(item => item.place);

  const queryClient = useQueryClient();
  const defaultPlace = savedPlacesItems[0] || 'Wroclaw'

  const savedPlacesActions = useSavedPlacesActions();
  const { data } = useQuery(`weather`, () => InternalApi.getWeather(defaultPlace));

  console.log('DEBUGGING:  ~ file: WeatherCard.tsx ~ line 25 ~ WeatherCard ~ data', data);
  const { mutate } = useMutation(InternalApi.getWeather, {
    onSuccess: (data) => {
      queryClient.setQueryData('weather', data);
    }
  })

  const [place, setPlace] = useState(defaultPlace)

  const onSearch = (value: string) => {
    mutate(value);
  }
  const onClickFav = (place: string) => () => {
    setPlace(place)
    mutate(place);
  }

  return (
    <article>
      <h2>Weather</h2>
      <p>Saved places: </p>
      <ul>
        {savedPlacesItems.map(place => <li><Button icon={<HeartOutlined />} onClick={onClickFav(place)} name={place}>{place}</Button></li>)}
      </ul>
      <br />
      <Button onClick={() => savedPlacesActions.addItem({ id: place, place })}>Add to saved places</Button>
      <Search placeholder="input search text" onSearch={onSearch} enterButton value={place} onChange={(e) => setPlace(e.target.value)}/>
      {
        data && (
          <>
           <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
            <p>description: {data.weather[0].description}</p>
            <p>temp: {data.main.temp}</p>
            <p>temp_max: {data.main.temp_max}</p>
            <p>temp_min: {data.main.temp_min}</p>
            <p>feels_like: {data.main.feels_like}</p>
            <p>humidity: {data.main.humidity}</p>
            <p>pressure: {data.main.pressure}</p>
            <Outfit 
              temp={data.main.temp} 
              feelsLike={data.main.feels_like} 
              tempMin={data.main.feels_like} 
              wind={data.wind.speed}
            />
          </>
        )
      }
    </article>
  )
}
