import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {map} from "lodash";
import {CardList, Spinner} from "@blueprintjs/core";
import {TimeSlot} from "./TimeSlot.tsx";
import {WeatherMetadata} from "../../types/WeatherMetadata.ts";
import './Weather.scss';
export const Weather = () => {
  const weather = useQuery({
    queryKey: ['weather'],
    queryFn: () =>
      axios
        .get('/data/smhi.json')
        .then((res) => res.data),
    refetchInterval: 30000
  })

  if (weather.isLoading || weather.data == null) {
    return <Spinner />;
  }
  const weather_cards = map(weather.data.timeSeries, (timeslot : WeatherMetadata) => {
    return <TimeSlot Metadata={timeslot} />
  });
  return <div className="weather">
    <CardList className="card-list">
      {...weather_cards}
    </CardList>
  </div>;
};