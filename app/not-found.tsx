import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page non trouvÃ©e
        </h2>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n&apos;existe pas ou a Ã©tÃ© dÃ©placÃ©e.
        </p>
        <Link href="/">
          <Button>
            Retour Ã  l&apos;accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}

