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

/**
 * Fetches flat data from a JSON file located at `/datas/flats.json`.
 * 
 * Sets loading state to true at the start of the fetch and resets any existing error state.
 * 
 * If the fetch is successful and the response is valid JSON, updates the `flatsData` state with the retrieved data.
 * If the response is not ok or the content is not valid JSON, throws an error.
 * 
 * Handles fetch errors by setting the `error` state and logs the error message. 
 * If the fetch is aborted, logs a specific message and returns early.
 * 
 * Finally, sets the loading state to false after the fetch attempt is complete, regardless of success or failure.
 */
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