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
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Une erreur s&apos;est produite</h2>
        <p className="mb-6 text-gray-600">
          Nous nous excusons pour la gêne occasionnée. Une erreur inattendue s&apos;est produite.
        </p>
        <div className="space-y-4">
          <Button onClick={() => reset()}>Réessayer</Button>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </div>
  );
}
