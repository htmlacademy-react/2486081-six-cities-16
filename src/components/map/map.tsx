import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {OffersTypes} from '../../types/offers-types';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../conts';

type MapProps = {
  className: string;
  offers:OffersTypes[];
  selectedPoint: string | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

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
