"use client"

import { useEffect } from "react"

export function LeafletCSS() {
  useEffect(() => {
    // Add Leaflet CSS dynamically on the client side
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    link.crossOrigin = ""

    // Add custom style to fix z-index issues with Leaflet
    const style = document.createElement("style")
    style.textContent = `
      .leaflet-pane,
      .leaflet-control,
      .leaflet-top,
      .leaflet-bottom {
        z-index: 40 !important;
      }
      .leaflet-control-container {
        z-index: 40 !important;
      }
      .leaflet-container {
        z-index: 1 !important;
      }
      
      /* Ensure images maintain aspect ratio */
      .aspect-preserve {
        min-width: 1200px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      
      /* Custom button styles */
      .custom-outline-button {
        background: transparent;
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        transition: all 0.2s ease;
      }
      
      .custom-outline-button:hover {
        border-color: rgba(255, 255, 255, 0.6);
        background: rgba(255, 255, 255, 0.1);
      }
      
      /* Menu hover styles */
      .nav-link:hover {
        color: #f19a04 !important;
      }
    `

    document.head.appendChild(link)
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(link)
      document.head.removeChild(style)
    }
  }, [])

  return null
}

