import {currentCustomIcon, defaultCustomIcon} from './const';
import {useEffect, useRef} from 'react';
import {layerGroup, Marker } from 'leaflet';
import {MapProps} from './type';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';


export default function Map({className, offers, selectedPoint}:MapProps,): JSX.Element {
  const city = offers.map((offer) => offer.city);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        marker
          .setIcon(selectedPoint !== undefined && offer.id === selectedPoint
            ? currentCustomIcon
            : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedPoint]);

  return (
    <section className={`${className}__map map`}
      ref={mapRef}
    >
    </section>
  );
}
