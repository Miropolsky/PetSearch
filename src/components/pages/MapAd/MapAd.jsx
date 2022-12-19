import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import styles from './MapAd.module.scss';

export default function MapAd({ geoLat, geoLon }) {
    return (
        <MapContainer
            center={[geoLat, geoLon]}
            zoom={15}
            scrollWheelZoom={false}
            className={styles.map}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[geoLat, geoLon]}></Marker>
        </MapContainer>
    );
}
