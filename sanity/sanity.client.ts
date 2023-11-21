import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
//   projectId: "ga8lllhf",
  projectId: "gwieubfy",
  dataset: "production",
  apiVersion: "2023-11-21",
  useCdn: false,
};

const client = createClient(config);

export default client;