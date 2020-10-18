export const someFeatureSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Example Schema",
    description: "Schema for creating examples",
    type: "object",
    properties: {
      name: {
        type: "string",
      },
    },
    additionalProperties: false,
    required: ["name"],
  };
  