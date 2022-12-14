import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './OpenMap.module.scss';

export default function OpenMap({ list }) {
    return (
        <MapContainer
            center={[55.702868, 55.530865]}
            zoom={7}
            scrollWheelZoom={false}
            className={styles.map}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
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
