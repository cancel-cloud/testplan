import { useState, useEffect, useCallback } from 'react';
import { ProcessedSubstitution, SubstitutionData } from '@/types';
import { processApiResponse } from '@/lib/data-processing';
import { sampleData } from '@/data/sample-data';

interface UseSubstitutionsResult {
  substitutions: ProcessedSubstitution[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

// Simple in-memory cache for API responses
const cache = new Map<string, { data: ProcessedSubstitution[]; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getCacheKey = (date: Date): string => {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
};

export function useSubstitutions(selectedDate: Date): UseSubstitutionsResult {
  const [substitutions, setSubstitutions] = useState<ProcessedSubstitution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubstitutions = useCallback(async () => {
    const cacheKey = getCacheKey(selectedDate);
    
    // Check cache first
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      setSubstitutions(cached.data);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // For now, use sample data since the API requires authentication and CORS setup
      // In a real implementation, you would use the API service here:
      // const apiService = ApiService.getInstance();
      // const response = await apiService.fetchSubstitutions(selectedDate);
      // const processed = processApiResponse(response);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Process sample data into our format
      const processed = sampleData.sampleSubstitutions.map((data: SubstitutionData) => ({
        hours: data.data[0],
        time: data.data[1],
        group: data.data[2],
        subject: data.data[3],
        room: data.data[4],
        teacher: data.data[5],
        type: data.data[6],
        info: data.data[7],
        originalData: data,
      }));

      // Cache the result
      cache.set(cacheKey, { data: processed, timestamp: Date.now() });
      
      setSubstitutions(processed);
    } catch (err) {
      console.error('Failed to fetch substitutions:', err);
      setError(
        err instanceof Error 
          ? err.message 
          : 'Fehler beim Laden der Vertretungen. Bitte versuchen Sie es später erneut.'
      );
      setSubstitutions([]);
    } finally {
      setIsLoading(false);
    }
  }, [selectedDate]);

  const refetch = useCallback(() => {
    const cacheKey = getCacheKey(selectedDate);
    cache.delete(cacheKey); // Clear cache for this date
    fetchSubstitutions();
  }, [selectedDate, fetchSubstitutions]);

  useEffect(() => {
    fetchSubstitutions();
  }, [fetchSubstitutions]);

  return {
    substitutions,
    isLoading,
    error,
    refetch,
  };
} 