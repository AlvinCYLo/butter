import React from 'react';

import { ReactBingmaps } from 'react-bingmaps';

const Map = () => {
    return (
        <>
            <ReactBingmaps
                bingmapKey={"AvcNf0oiWdC4FZyyZkrrJU8ILKl4kkKdLJlDA6W0ZM0BNM1b0xpWk-otCvDifzDo"}
                center={[49.246292, -123.116226]}
                mapTypeId={"road"}
                navigationBarMode={"compact"}
            />
        </>

    );
};

export default Map;