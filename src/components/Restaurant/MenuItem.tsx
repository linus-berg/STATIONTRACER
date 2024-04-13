import {Icon, IconName, Intent} from "@blueprintjs/core";
import {Dish} from "../../types/RestaurantMenu.ts";
interface Props {
  Dish: Dish;
}
export const MenuItem = (props: Props) => {
  const icon :IconName= props.Dish.type == "vegetarian" ? "tree" : "bank-account";
  const intent: Intent = props.Dish.type == "vegetarian" ? "success" : "danger";
  return (
    <div>
      <div className="menu-item">
        <Icon icon={icon} intent={intent} />
        {props.Dish.dish}
      </div>
    </div>
  );
};
