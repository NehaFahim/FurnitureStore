import { groq } from "next-sanity";


export const allProduct = groq`*[type == "product"]`;

