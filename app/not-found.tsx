import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">Page non trouvée</h2>
        <p className="mb-8 text-gray-600">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/">
          <Button>Retour à l&apos;accueil</Button>
        </Link>
      </div>
    </div>
  );
}
