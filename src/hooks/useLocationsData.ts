import { useState, useEffect } from "react";

// Define the Location type within the hook file
export interface Location {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

interface UseLocationDataReturn {
  locationsData: Location[];
  isDataLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>; 
}

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5173";
const LOCATIONS_ENDPOINT = "/datas/locations.json";

// Custom hook for fetching location data
const useLocationsData = (initialData: Location[] = []): UseLocationDataReturn => {
  const [locationsData, setLocationsData] = useState<Location[]>(initialData);
  const [isDataLoading, setDataLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLocations = async (signal?: AbortSignal) => {
    setDataLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}${LOCATIONS_ENDPOINT}`, { signal,
        headers: {
          "Accept": "application/json",
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }
      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        throw new Error('Le contenu n\'est pas du JSON valide.');
      }

      const data: Location[] = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('Le formattage des données est invalide.');
      }

      setLocationsData(data);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        console.log("Fetch aborted");
        return;
      }

      const errorMessage = err instanceof Error ? err.message : "Une erreur inconnue est survenue.";
      console.error("Fetch error:", errorMessage);
      setError(errorMessage);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchLocations(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const refetch = () => fetchLocations();

  return { locationsData, isDataLoading, error, refetch };
};

export default useLocationsData;