import { useState } from 'react';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

interface UseLeadFormReturn {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  handleSubmit: (data: LeadFormData) => Promise<void>;
}

export const useLeadForm = (): UseLeadFormReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (data: LeadFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Erro ao enviar formulário');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar formulário');
      console.error('Erro ao salvar lead:', err);
      throw err; // Propaga o erro para o componente poder tratar
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    success,
    handleSubmit,
  };
};
