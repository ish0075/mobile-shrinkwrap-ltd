import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin } from 'lucide-react';

interface City {
  name: string;
  slug: string;
  region: string;
  population: string;
  description: string;
  coordinates: [number, number]; // [lng, lat]
}

interface ServiceAreasMapProps {
  cities: Omit<City, 'coordinates'>[];
}

const ServiceAreasMap: React.FC<ServiceAreasMapProps> = ({ cities }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);

  // Ontario city coordinates
  const cityCoordinates: Record<string, [number, number]> = {
    toronto: [-79.3832, 43.6532],
    ottawa: [-75.6919, 45.4215],
    mississauga: [-79.6441, 43.5890],
    hamilton: [-79.8711, 43.2557],
    london: [-81.2497, 42.9849],
    windsor: [-83.0178, 42.3149],
    oakville: [-79.6876, 43.4675],
    burlington: [-79.7990, 43.3255],
    niagara: [-79.0849, 43.0896],
    sudbury: [-80.9930, 46.4917],
    kingston: [-76.4813, 44.2312],
    kitchener: [-80.4781, 43.4516]
  };

  const initializeMap = () => {
    if (!mapboxToken || !mapContainer.current) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-80.0, 45.0], // Center on Ontario
      zoom: 6,
      projection: 'mercator' as any
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    map.current.on('load', () => {
      setMapLoaded(true);
      
      // Add markers for each city  
      cities.forEach((city) => {
        const coordinates = cityCoordinates[city.slug];
        if (coordinates && map.current) {
          // Create custom marker element
          const markerElement = document.createElement('div');
          markerElement.className = 'custom-marker';
          markerElement.style.cssText = `
            width: 32px;
            height: 32px;
            background: hsl(var(--primary));
            border: 3px solid white;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          `;
          
          // Add icon
          const icon = document.createElement('div');
          icon.innerHTML = '📍';
          icon.style.fontSize = '16px';
          markerElement.appendChild(icon);

          // Create popup
          const popup = new mapboxgl.Popup({
            offset: 25,
            closeButton: true,
            closeOnClick: false
          }).setHTML(`
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold; color: hsl(var(--foreground));">${city.name}</h3>
              <p style="margin: 0 0 4px 0; font-size: 12px; color: hsl(var(--muted-foreground));">
                ${city.region} • Population: ${city.population}
              </p>
              <p style="margin: 0; font-size: 12px; color: hsl(var(--muted-foreground));">
                ${city.description}
              </p>
            </div>
          `);

          // Add marker to map
          new mapboxgl.Marker(markerElement)
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map.current);
        }
      });
    });
  };

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  if (!mapboxToken) {
    return (
      <div className="bg-card rounded-lg border border-border p-8">
        <div className="text-center max-w-md mx-auto">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-4">
            Interactive Ontario Service Map
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            To display the interactive map with service area pins, please enter your Mapbox public token. 
            Get your free token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
          <div className="space-y-4">
            <div className="text-left">
              <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
              <Input
                id="mapbox-token"
                type="text"
                placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsICJhIjoi..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="mt-1"
              />
            </div>
            <Button 
              onClick={initializeMap} 
              disabled={!mapboxToken}
              className="w-full"
            >
              Load Interactive Map
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="text-xl font-bold text-foreground mb-2">
          Ontario Service Coverage Map
        </h3>
        <p className="text-muted-foreground text-sm">
          Click on any pin to see service details for that city
        </p>
      </div>
      <div ref={mapContainer} className="w-full h-96" />
      {mapLoaded && (
        <div className="p-4 bg-muted/50 text-center">
          <p className="text-muted-foreground text-sm">
            We serve all major cities and towns throughout Ontario. 
            Don't see your location? Contact us - we likely serve your area!
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceAreasMap;