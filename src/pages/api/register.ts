import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  console.log('hello...')
  const data = await request.formData();

  data.append("Date_Time", new Date().toLocaleString('en-GB', { timeZone: 'IST' }));

  const response = await fetch('https://script.google.com/macros/s/AKfycbx94hM57YXSyM1kbPu9Sxp-fsI32868E1PEHbCi9Kkg_lmDc4kWlo0JNXJN8H_1A3kL/exec', {
    method: 'POST',
    body: data
  });

  const res =  await response.json()


  console.log('res...', res)

  // Validate the data - you'll probably want to do more than this
  // if (!name || !email || !message) {
  //   return new Response(
  //     JSON.stringify({
  //       message: "Missing required fields",
  //     }),
  //     { status: 400 }
  //   );
  // }
  // // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success hit!"
    }),
    { status: 200 }
  );
};