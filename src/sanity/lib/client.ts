import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId,token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  token,
  // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  
  
 
})






