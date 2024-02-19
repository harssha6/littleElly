import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  console.log('hello...')
  const data = await request.formData();

  data.append("Date_Time", new Date().toLocaleString('en-GB', { timeZone: 'IST' }));

  const response = await fetch('https://script.google.com/macros/s/AKfycbwBgKidSakQwW88Y4dz9WnGBfjAfqicGCte6VoyEk5NSOv4vGFDgLu2KFDQdXNDmWY/exec', {
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