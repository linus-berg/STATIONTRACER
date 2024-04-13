import {Card, H4} from "@blueprintjs/core";
import {DepartureMetadata} from "../../types/DepartureMetadata.ts";
interface Props {
  Departure: DepartureMetadata;
}
export const Departure = (props: Props) => {

  const expected = new Date(props.Departure.expected);
  return (<Card id={props.Departure.journey.id}>
    <div className="departure-card">
      <div>
        {props.Departure.line.designation}
      </div>
      <div>
        <H4>{props.Departure.destination}</H4>
      </div>
      <div>
        {props.Departure.display}
      </div>
      <div>
        {expected.getHours()}:{expected.getMinutes()}
      </div>
      <div>
        {props.Departure.state}
      </div>
    </div>
  </Card>);
};