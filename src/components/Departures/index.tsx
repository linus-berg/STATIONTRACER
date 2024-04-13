import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {CardList, Spinner} from "@blueprintjs/core";
import { map } from 'lodash';
import {Departure} from "./Departure.tsx";
import {DepartureMetadata} from "../../types/DepartureMetadata.ts";
import './Departures.scss';
export const Departures = () => {
  const departures = useQuery({
    queryKey: ['departures'],
    queryFn: () =>
      axios
        .get('/data/sl.json')
        .then((res) => res.data),
    refetchInterval: 3000
  });

  if (departures.isLoading || departures.data == null) {
    return <Spinner />;
  }
  const departure_cards = map(departures.data.departures, (departure : DepartureMetadata) => {
    return <Departure Departure={departure} />
  });
  return <div className="departures">
    <CardList className="card-list">
      {...departure_cards}
    </CardList>
  </div>;
};