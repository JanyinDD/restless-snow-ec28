export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "masterpiece, best quality, kneehighs, girl, friled bikini, on the beach, "};

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
