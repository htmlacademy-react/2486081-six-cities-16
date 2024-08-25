import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Map, TileLayer } from 'leaflet';
type location = {
  latitude: number;
  longitude: number;
  zoom: number;
}
type locationCity = {
  name: string;
  location: location;
}

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: locationCity[]): Map | null {

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city[0].location.latitude,
          lng: city[0].location.longitude,
        },
        zoom: city[0].location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    } else {
      map?.setView([city[0].location.latitude, city[0].location.longitude], city[0].location.zoom);
    }
  }, [mapRef, city, map]);

  return map;
}
