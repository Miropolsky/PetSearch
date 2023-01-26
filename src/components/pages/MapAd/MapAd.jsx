import {MapContainer, TileLayer, Marker, useMap} from 'react-leaflet';
import styles from './MapAd.module.scss';

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default function MapAd({ geoLat, geoLon }) {
    return (
        <MapContainer
            center={[geoLat, geoLon]}
            zoom={15}
            scrollWheelZoom={false}
            className={styles.map}
        >

            <ChangeView center={[geoLat,geoLon]} zoom={10} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[geoLat, geoLon]}></Marker>
        </MapContainer>
    );
}
