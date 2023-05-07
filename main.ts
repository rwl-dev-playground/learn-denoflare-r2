export default {
  fetch() {
    try {
      return new Response("Hello, World!");
    } catch (e) {
      return new Response(e.message);
    }
  },
};
