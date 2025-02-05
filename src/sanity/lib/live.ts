import { defineLive } from "next-sanity";
import { client } from "./client";  // ✅ Use named import

export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    apiVersion: 'vX' 
  }) 
});
