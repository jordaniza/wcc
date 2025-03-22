"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Create a dynamic import for the Map component with no SSR
const MapComponent = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Import Leaflet only on the client side
    import("leaflet").then((L) => {
      // Initialize the map
      const map = L.map("map").setView([49.1666, -123.1336], 13) // Richmond, BC coordinates

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map)

      // Add marker for the clinic location
      const marker = L.marker([49.1666, -123.1336]).addTo(map)
      marker.bindPopup("West Coast Chiropractic<br>1200 Douglas Crescent, Richmond, BC").openPopup()

      // Cleanup
      return () => {
        map.remove()
      }
    })

    setIsMounted(true)
  }, [])

  return <div id="map" className="h-full w-full" style={{ zIndex: 10 }} />
}

// Create a dynamic component that only renders on the client
const DynamicMap = dynamic(() => Promise.resolve(MapComponent), {
  ssr: false,
})

export function Map() {
  return <DynamicMap />
}

