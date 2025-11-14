'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ReservasPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    personas: 2,
    notas: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Enviar a API cuando esté lista
    console.log('Reserva enviada:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ nombre: '', email: '', telefono: '', fecha: '', hora: '', personas: 2, notas: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-amber-900">�� Café de Vereda</Link>
          <div className="flex gap-6">
            <Link href="/menu" className="text-amber-800 hover:text-amber-600">Menú</Link>
            <Link href="/reservas" className="text-amber-600 font-semibold">Reservar</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-amber-900 mb-4">Reserva tu Mesa</h1>
        <p className="text-xl text-amber-700 mb-8">Completa el formulario para reservar una mesa en nuestro café</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <label className="block text-amber-900 font-semibold mb-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-6">
            <label className="block text-amber-900 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="tu@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-amber-900 font-semibold mb-2">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="+54 9 123 456789"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-amber-900 font-semibold mb-2">Fecha</label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <label className="block text-amber-900 font-semibold mb-2">Hora</label>
              <input
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-amber-900 font-semibold mb-2">Cantidad de personas</label>
            <select
              name="personas"
              value={formData.personas}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(n => <option key={n} value={n}>{n} personas</option>)}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-amber-900 font-semibold mb-2">Notas adicionales</label>
            <textarea
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 h-24"
              placeholder="Alergias, preferencias, etc."
            />
          </div>

          {submitted && <p className="text-green-600 font-semibold mb-4">✓ Reserva enviada correctamente!</p>}

          <button
            type="submit"
            className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 font-semibold"
          >
            Confirmar Reserva
          </button>
        </form>
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
