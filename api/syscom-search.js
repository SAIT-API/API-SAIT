// archivo: api/syscom-search.js

export default async function handler(req, res) {
  try {
    const body = req.body || {};

    console.log('Webhook de Kommo:', JSON.stringify(body, null, 2));

    // Por ahora usamos un producto de prueba si no viene nada
    const productoTexto = body.producto || 'FAAC 844';

    // Aquí luego conectaremos SYSCOM de verdad
    const nombre = 'FAAC 844 ER Z16 (EJEMPLO)';
    const precioSyscom = 9500; // costo ejemplo
    const disponibilidad = 'En almacén Guadalajara';
    const sku = 'FAAC844ERZ16';

    const precioConUtilidad = Math.round(precioSyscom * 1.35);
    const precioFinalConIVA = Math.round(precioConUtilidad * 1.16);

    res.status(200).json({
      ok: true,
      productoEntrada: productoTexto,
      nombre,
      precioSyscom,
      precioConUtilidad,
      precioFinalConIVA,
      disponibilidad,
      sku
    });
  } catch (err) {
    console.error('Error en /api/syscom-search:', err);
    res.status(500).json({ ok: false, message: 'Error interno en api syscom-search' });
  }
}
