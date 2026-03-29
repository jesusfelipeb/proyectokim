#!/usr/bin/env node

/**
 * Script para obtener access_token de Tiendanube via OAuth2.
 *
 * Uso:
 *   1. Crear app en https://www.tiendanube.com/partners
 *   2. Abrir en el navegador: https://www.tiendanube.com/apps/{CLIENT_ID}/authorize
 *   3. Kim autoriza → redirect a tu URL con ?code=XXXX
 *   4. Ejecutar: node scripts/tiendanube-auth.mjs <client_id> <client_secret> <code>
 *   5. Copiar access_token y store_id a .env.local
 */

const [clientId, clientSecret, code] = process.argv.slice(2);

if (!clientId || !clientSecret || !code) {
  console.error('Uso: node scripts/tiendanube-auth.mjs <client_id> <client_secret> <code>');
  console.error('');
  console.error('Pasos previos:');
  console.error('  1. Crear app en https://www.tiendanube.com/partners');
  console.error('  2. Abrir: https://www.tiendanube.com/apps/<CLIENT_ID>/authorize');
  console.error('  3. Kim autoriza la app → copiar el "code" de la URL de redirect');
  process.exit(1);
}

const res = await fetch('https://www.tiendanube.com/apps/authorize/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'authorization_code',
    code,
  }),
});

if (!res.ok) {
  const text = await res.text();
  console.error(`Error ${res.status}: ${text}`);
  process.exit(1);
}

const data = await res.json();

console.log('');
console.log('Autenticación exitosa. Agregar a .env.local:');
console.log('');
console.log(`TIENDANUBE_STORE_ID=${data.user_id}`);
console.log(`TIENDANUBE_ACCESS_TOKEN=${data.access_token}`);
console.log('');
