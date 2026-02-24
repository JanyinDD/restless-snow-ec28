export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "采用超写実的な visual style，8K画質で、画面中展示了一位 beautiful and gentle 真人 girl。Regarding her appearance，她拥有 slender hands 和 fair translucent legs，整体身材 slim，only 双马尾 hairstyle 遮挡部位。上半身 no outfit，only 在头上 wearing a cute and eye-catching hair accessory，下半身 bare，only 脚上 wearing black calf socks。Regarding her action，此刻 she is holding a smartphone with a rabbit ear case in one hand，taking a selfie toward the mirror。The composition adopts a high-angle俯瞰 shot，girl back to the camera，smooth back occupying the center of the frame，taking a selfie toward the mirror and reflecting the image from the mirror，soles naturally stepping on the ground，legs spread while squatting on the ground in an アジア蹲 posture，waist and back curve naturally stretched，floor texture clear with water stains，overall color tone fresh and elegant，full of youthful and sweet atmosphere。 "};

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
