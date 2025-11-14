'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function MenuPage() {
  const [productos, setProductos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductos() {
      const { data, error } = await supabase
        .from('productos_menu')
        .select('*');
      if (error) console.error('Error:', error);
      else setProductos(data || []);
      setLoading(false);
    }
    fetchProductos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-amber-900">🍰 Café de Vereda
          </Link>
          <div className="flex gap-6">
            <Link href="/menu" className="text-amber-600 font-semibold">Menú</Link>
            <Link href="/reservas" className="text-amber-800 hover:text-amber-600">Reservar</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-amber-900 mb-4">Nuestro Menú</h1>
        <p className="text-xl text-amber-700 mb-8">Disfruta nuestras especialidades artesanales</p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl text-amber-700">Cargando productos...</p>
          </div>
        ) : productos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-amber-700">No hay productos disponibles en este momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto) => (
              <div key={producto.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">{producto.nombre}</h3>
                <p className="text-amber-700 mb-4 h-12 overflow-hidden">{producto.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-amber-600">${producto.precio}</span>
                  {producto.disponible ? (
                    <span className="bg-green-500 text-white px-4 py-2 rounded-lg">Disponible</span>
                  ) : (
                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg">No disponible</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Café de Vereda. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
