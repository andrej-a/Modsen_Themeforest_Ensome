import React from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { useTheme } from 'styled-components';

import { DefaultTheme } from '@/globalStyles';
import { numberEnums } from '@/types/constants';

import coordinates from './config/coordinates';
import { MapSectionContainer } from './styles';

const { DEFAULT_ZOOM_OF_THE_MAP } = numberEnums;

const MapSection = () => {
    const { width, height } = useTheme() as DefaultTheme;
    return (
        <MapSectionContainer>
            <YMaps>
                <Map
                    defaultState={{
                        center: [coordinates[0].lat, coordinates[0].long],
                        zoom: DEFAULT_ZOOM_OF_THE_MAP,
                    }}
                    style={{ width: `${width.xxl}%`, height: `${height.xxl}%` }}
                >
                    {coordinates.map(({ city, lat, long }) => {
                        return <Placemark key={city} geometry={[lat, long]} />;
                    })}
                </Map>
            </YMaps>
        </MapSectionContainer>
    );
};

export default MapSection;
