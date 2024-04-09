import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import styles from './OpenMap.module.scss';

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default function OpenMap({ list }) {
    const geoLat = 56.21;
    const geoLon = 55.88;
    return (
        <MapContainer
            center={[geoLat, geoLon]}
            zoom={7}
            scrollWheelZoom={false}
            className={styles.map}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <ChangeView center={[geoLat, geoLon]} zoom={10} />
            {/* <MarkerClusterGroup> */}
            <div className={styles.popup}>
                {list.map((ad) => {
                    return (
                        <Marker key={ad.id} position={[ad.geoLat, ad.geoLon]}>
                            <Popup key={ad.id}>
                                <div>
                                    <div>Описание: {ad.description}</div>
                                    <div>Адрес: {ad.address}</div>
                                    <div>Дата: {ad.date}</div>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </div>
            {/* </MarkerClusterGroup> */}
        </MapContainer>
    );
}
