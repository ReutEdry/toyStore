import { Button } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import { Fragment, useState } from 'react';

const AnyReactComponent = ({ text }) => <div style={{ fontSize: '50px' }}>{text}</div>;

export function SimpleMap() {
    const [coords, setCoords] = useState({ lat: 31.741367768100375, lng: 34.63283303308573 })

    const { lat, lng } = coords

    let defaultProps = {
        center: {
            lat: lat,
            lng: lng
        },
        zoom: 17
    };

    function onStoreLocationClick(locationCords) {
        setCoords(locationCords)
    }

    return (
        // Important! Always set the container height explicitly
        <>
            <div className='google-container' >
                <GoogleMapReact

                    bootstrapURLKeys={{ key: "" }}
                    center={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={31.741367768100375}
                        lng={34.63283303308573}
                        text='📍'
                    />
                    <AnyReactComponent
                        lat={32.6429718}
                        lng={35.0928567}
                        text='📍'
                    />
                    <AnyReactComponent
                        lat={32.08088}
                        lng={34.78057}
                        text='📍'
                    />
                </GoogleMapReact>

                <div className='google-search-btn'>
                    <Button onClick={() => onStoreLocationClick({ lat: 31.741367768100375, lng: 34.63283303308573 })} variant="outlined">Nitzan</Button>
                    <Button onClick={() => onStoreLocationClick({ lat: 32.6429718, lng: 35.0928567 })} variant="outlined">Yoqneam Illit</Button>
                    <Button onClick={() => onStoreLocationClick({ lat: 32.08088, lng: 34.78057 })} variant="outlined">Tel Aviv</Button>
                </div>
            </div>
        </>

    );
}