
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  documents: "./queries/**.ts",
  generates: {
    "gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
