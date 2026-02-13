'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Une erreur s&apos;est produite
        </h2>
        <p className="text-gray-600 mb-6">
          Nous nous excusons pour la gÃªne occasionnÃ©e. Une erreur inattendue s&apos;est produite.
        </p>
        <div className="space-y-4">
          <Button onClick={() => reset()}>
            RÃ©essayer
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/'}
          >
            Retour Ã  l&apos;accueil
          </Button>
        </div>
      </div>
    </div>
  );
}

