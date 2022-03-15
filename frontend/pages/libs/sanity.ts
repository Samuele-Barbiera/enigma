
import createClient from '@sanity/client'

export const sanityClient:any = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: '2022-03-06',
}

export const config = createClient(sanityClient)