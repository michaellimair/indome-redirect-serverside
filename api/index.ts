export const config = {
  runtime: "edge",
  region: "hkg1",
  // Based on https://vercel.com/docs/functions/edge-functions#regional-edge-function-invocation
  regions: ["hkg1"],
};

export default function handler() {
  return new Response(null, {
    headers: {
      Location: "https://indome.michaellimair.me/e/3/indome-one-last-dance",
    },
    status: 302,
  });
}
