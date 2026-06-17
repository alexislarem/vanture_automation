import { createClient } from '@/lib/supabase/server';

// STUB: Mocks temporales para autenticación y planes de usuario.
// Debe ser reemplazado por la lógica real de Supabase Auth en la Fase 3/4.

/**
 * Simula la validación de autenticación de una petición.
 * Lanza un error si no está autenticado (para la fase 1, siempre pasa).
 */
export async function requireAuth(req: Request): Promise<void> {
  // Si quisiéramos simular un error:
  // throw new Error('Auth required');
  return Promise.resolve();
}

/**
 * Obtiene el usuario actual basado en la petición.
 */
export async function getCurrentUser(req: Request): Promise<{ id: string; email: string }> {
  return Promise.resolve({
    id: '00000000-0000-0000-0000-000000000000', // UUID falso temporal
    email: 'test@example.com'
  });
}

/**
 * Obtiene el plan actual del usuario (free, pro, enterprise) desde la base de datos.
 * Si ocurre un error, retorna 'free' por defecto para asegurar la continuidad del servicio.
 */
export async function getUserPlan(userId: string): Promise<'free' | 'pro' | 'enterprise'> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('plan')
    .eq('id', userId)
    .single();

  if (error) {
    console.warn(`Could not fetch user plan for ${userId}, falling back to 'free':`, error.message);
    return 'free';
  }

  return (data?.plan as 'free' | 'pro' | 'enterprise') || 'free';
}
