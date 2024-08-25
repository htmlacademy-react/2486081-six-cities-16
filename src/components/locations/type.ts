import {MouseEvent} from 'react';

export type LocationsProps = {
  cityCurrent: string ;
  onCityClick: (evt: MouseEvent<HTMLLIElement>) => void;
}
