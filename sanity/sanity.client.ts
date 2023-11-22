import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID || "1x2z2j5o",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2023-11-21",
  useCdn: false,
};

const client = createClient(config);

export default client;