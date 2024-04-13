import {Card, H4} from "@blueprintjs/core";
import {WeatherMetadata, WeatherParameter} from "../../types/WeatherMetadata.ts";
import { find } from 'lodash';
interface Props {
  Metadata: WeatherMetadata;
}
export const TimeSlot = (props: Props) => {
  const time = new Date(props.Metadata.validTime);
  const params = props.Metadata.parameters;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const temp = find(params, (x: WeatherParameter) => {
    return x['name'] == "t";
  });
  if (temp == undefined) {
    return null;
  }
  return (<Card>
    <div className="weather-card">
      <div>
        {time.toLocaleDateString()} {time.toLocaleTimeString()}
      </div>
      <div>
        <H4>{temp.values[0]} °C</H4>
      </div>
      <div>
      </div>
    </div>
  </Card>);
};