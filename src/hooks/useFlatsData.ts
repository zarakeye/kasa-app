import { useState, useEffect } from "react";

// Define the Location type within the hook file
export interface Flat {
  id?: string;
  title?: string;
  cover?: string;
  pictures?: string[];
  description?: string;
  host?: {
    name: string;
    picture: string;
  };
  rating?: string;
  location?: string;
  equipments?: string[];
  tags?: string[];
}

export interface UseFlatDataReturn {
  flatsData: Flat[];
  isDataLoading: boolean;
  error: string | null;
}

// Custom hook for fetching location data
const useFlatsData = (): UseFlatDataReturn => {
  const [flatsData, setFlatsData] = useState<Flat[]>([]);
  const [isDataLoading, setDataLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFlats = async () => {
    setDataLoading(true);
    setError(null);

    try {
      const response = await fetch(`/datas/flats.json`, {
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

      const data: Flat[] = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('Le formattage des données est invalide.');
      }

      setFlatsData(data);
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
    fetchFlats();
  }, []);

  return { flatsData, isDataLoading, error };
};

export default useFlatsData;