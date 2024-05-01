import { type QueryParams, createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn, token } from './env';
// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';
// const useCdn = Boolean(process.env.NEXT_PUBLIC_SANITY_USE_CDN) || false;
// const token = process.env.SECRET_SANITY_VIEW_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
  // perspective: 'published',
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      //revalidate: 30, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  });
}
