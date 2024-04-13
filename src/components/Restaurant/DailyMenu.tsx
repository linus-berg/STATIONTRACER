import {Card, H4} from "@blueprintjs/core";
import {Dish} from "../../types/RestaurantMenu.ts";
import {map} from 'lodash';
import {MenuItem} from "./MenuItem.tsx";
interface Props {
  Day: string;
  Dishes: Dish[];
}
export const DailyMenu = (props: Props) => {
  return (<Card>
    <div className="daily-menu-card">
      <div>
        <H4>{props.Day}</H4>
      </div>
      <div className="dishes">
        {map(props.Dishes, (dish) => <MenuItem key={dish.index} Dish={dish} />)}
      </div>
    </div>
  </Card>);
};