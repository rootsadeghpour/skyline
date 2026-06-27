export async function onRequest() {
  return Response.json({
    status: "ok",
    message: "Skyline API is working!"
  });
}