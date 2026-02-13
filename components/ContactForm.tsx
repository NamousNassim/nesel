'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.enum(['domiciliation', 'creation', 'administration', 'autre']),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      console.log('Form data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage('Merci pour votre message ! Nous vous contacterons bientôt.');
      reset();
    } catch {
      setSubmitMessage("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[color:var(--ink)]">
            Nom complet *
          </label>
          <input
            {...register('name')}
            type="text"
            className={cn(
              'mt-2 w-full rounded-2xl border px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-[color:var(--brand)]',
              errors.name ? 'border-red-300' : 'border-[color:var(--line)]'
            )}
            placeholder="Votre nom complet"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[color:var(--ink)]">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            className={cn(
              'mt-2 w-full rounded-2xl border px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-[color:var(--brand)]',
              errors.email ? 'border-red-300' : 'border-[color:var(--line)]'
            )}
            placeholder="votre@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[color:var(--ink)]">
            Téléphone
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="mt-2 w-full rounded-2xl border border-[color:var(--line)] px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-[color:var(--brand)]"
            placeholder="+212 6XX XXX XXX"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[color:var(--ink)]">
            Entreprise
          </label>
          <input
            {...register('company')}
            type="text"
            className="mt-2 w-full rounded-2xl border border-[color:var(--line)] px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-[color:var(--brand)]"
            placeholder="Nom de votre entreprise"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-[color:var(--ink)]">
          Service recherché *
        </label>
        <select
          {...register('service')}
          className={cn(
            'mt-2 w-full rounded-2xl border px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-[color:var(--brand)]',
            errors.service ? 'border-red-300' : 'border-[color:var(--line)]'
          )}
        >
          <option value="">Sélectionner un service</option>
          <option value="domiciliation">Domiciliation d&apos;entreprise</option>
          <option value="creation">Création de société</option>
          <option value="administration">Support administratif</option>
          <option value="autre">Autre</option>
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[color:var(--ink)]">
          Message *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className={cn(
            'mt-2 w-full rounded-2xl border px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-[color:var(--brand)]',
            errors.message ? 'border-red-300' : 'border-[color:var(--line)]'
          )}
          placeholder="Décrivez votre projet ou vos besoins..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <div>
        <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>
      </div>

      {submitMessage && (
        <div
          className={cn(
            'rounded-2xl p-4 text-sm',
            submitMessage.includes('Erreur') ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-800'
          )}
        >
          {submitMessage}
        </div>
      )}
    </form>
  );
}

