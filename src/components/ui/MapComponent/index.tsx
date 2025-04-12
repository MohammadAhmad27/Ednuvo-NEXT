"use client";

import { useEffect, useRef, useState } from "react";
import Map, {
  Marker,
  MapRef,
  FullscreenControl,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapComponentProps {
  address: string;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

export default function MapComponent({ address }: MapComponentProps) {
  const [marker, setMarker] = useState<[number, number]>([46.6753, 24.7136]);
  const mapRef = useRef<MapRef | null>(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!address || address.length < 4) return;
      try {
        const res = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            address
          )}.json?access_token=${MAPBOX_TOKEN}`
        );

        const data = await res.json();
        console.log("data: ", data);
        const coordinates = data?.features?.[0]?.center;

        if (coordinates) {
          setMarker(coordinates);
          mapRef.current?.flyTo({ center: coordinates, zoom: 7 });
        } else {
          console.warn("No coordinates found for address:", address);
        }
      } catch (error) {
        console.error("Geocoding failed:", error);
      }
    };

    fetchCoordinates();
  }, [address]);

  return (
    <div>
      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: 46.6753,
          latitude: 24.7136,
          zoom: 5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        style={{ width: "100%", height: "300px", borderRadius: "12px" }}
      >
        <FullscreenControl position="top-right" />
        <NavigationControl position="top-left" />
        {marker && (
          <Marker longitude={marker[0]} latitude={marker[1]} color="#FF0000" />
        )}
      </Map>
    </div>
  );
}
