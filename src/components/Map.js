import React from "react";
import { Map, Placemark } from "react-yandex-maps";

const MyMap = () => (
	<Map
		width="100%"
		height="70vh"
		defaultState={{
			center: [56.791109, 60.640142],
			zoom: 14,
			controls: ["zoomControl", "fullscreenControl"]
		}}
		modules={["control.ZoomControl", "control.FullscreenControl"]}
	>
		<Placemark geometry={[56.791109, 60.640142]} />
	</Map>
);

export default MyMap;
