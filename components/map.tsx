"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const locations = [
  {
    name: "West Coast Chiropractic",
    label: "Douglas Crescent",
    address: "1200 Douglas Crescent, Richmond, BC V7B 1E7",
    coordinates: [49.188983, -123.147595] as [number, number],
    note: "Call/text/e-mail to book at this location.",
  },
  {
    name: "West Coast Chiropractic - Horseshoe Way",
    label: "Horseshoe Way",
    address: "11151 Horseshoe Way Unit 24, Richmond, BC V7A 4S5",
    coordinates: [49.1265, -123.098167] as [number, number],
  },
];

// Create a dynamic import for the Map component with no SSR
const MapComponent = () => {
  useEffect(() => {
    type LeafletMap = {
      fitBounds: (bounds: unknown, options?: unknown) => void;
      remove: () => void;
    };

    let map: LeafletMap | null = null;
    let isCancelled = false;

    // Import Leaflet only on the client side
    import("leaflet").then((L) => {
      if (isCancelled) {
        return;
      }

      // Initialize the map
      const leafletMap = L.map("map") as LeafletMap;
      map = leafletMap;

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(leafletMap);

      const markers = locations.map((location) => {
        const marker = L.circleMarker(location.coordinates, {
          radius: 10,
          color: "#111111",
          fillColor: "#f19a04",
          fillOpacity: 1,
          opacity: 1,
          weight: 3,
        }).addTo(leafletMap);
        const note = location.note ? `<br><em>${location.note}</em>` : "";

        marker.bindPopup(
          `<strong>${location.name}</strong><br>${location.address}${note}`,
        );
        marker.bindTooltip(location.label, {
          className: "wcc-map-label",
          direction: "top",
          offset: [0, -10],
          permanent: true,
        });

        return marker;
      });

      const markerGroup = L.featureGroup(markers);

      leafletMap.fitBounds(markerGroup.getBounds(), {
        padding: [40, 40],
        maxZoom: 13,
      });
    });

    // Cleanup
    return () => {
      isCancelled = true;
      map?.remove();
    };
  }, []);

  return <div id="map" className="h-full w-full" style={{ zIndex: 10 }} />;
};

// Create a dynamic component that only renders on the client
const DynamicMap = dynamic(() => Promise.resolve(MapComponent), {
  ssr: false,
});

export function Map() {
  return <DynamicMap />;
}
