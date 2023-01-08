import { require } from "../../require.ts";

export interface RequireShowdownOptions {
  version?: string;
}

// TODO: Add tests.
export async function requireShowdown(options: RequireShowdownOptions = {}) {
  const version = options.version || "latest";
  return await require(
    `https://cdn.jsdelivr.net/npm/showdown@${version}/dist/showdown.min.js`,
    {
      check() {
        return Boolean((window as { showdown?: unknown }).showdown);
      },
    },
  );
}
