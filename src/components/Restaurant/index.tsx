import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {CardList, Spinner} from "@blueprintjs/core";
import {DailyMenu} from "./DailyMenu.tsx";
import './Restaurant.scss';
import {RestaurantMenu} from "../../types/RestaurantMenu.ts";
export const Restaurant = () => {
  const menu = useQuery<RestaurantMenu>({
    queryKey: ['menu'],
    queryFn: () =>
      axios
        .get('/data/menu.json')
        .then((res) => res.data),
    refetchInterval: 60000
  })

  if (menu.isLoading || menu.data == null) {
    return <Spinner />;
  }
  return <div className="weather">
    <CardList compact className="card-list">
      <DailyMenu Day="Monday" Dishes={menu.data.monday} />
      <DailyMenu Day="Tuesday" Dishes={menu.data.tuesday} />
      <DailyMenu Day="Wednesday" Dishes={menu.data.wednesday} />
      <DailyMenu Day="Thursday" Dishes={menu.data.thursday} />
      <DailyMenu Day="Friday" Dishes={menu.data.friday} />
    </CardList>
  </div>;
};