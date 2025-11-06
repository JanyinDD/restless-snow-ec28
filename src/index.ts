export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "masterpiece, best quality, masterpiece,best quality,official art,extremely detailed CG unity 8k wallpaper, real, incredibly_absurdres, sea, little girl, sailor suite, "};

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
