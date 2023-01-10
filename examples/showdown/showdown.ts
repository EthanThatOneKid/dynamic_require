import { dynamicRequire } from "../../dynamic_require.ts";

export interface ShowdownDynamicOptions {
  version?: string;
}

// TODO: Add tests.
export async function dynamicRequireShowdown(
  options: ShowdownDynamicOptions = {},
) {
  const version = options.version || "latest";
  return await dynamicRequire(
    `https://cdn.jsdelivr.net/npm/showdown@${version}/dist/showdown.min.js`,
    {
      check() {
        return Boolean((window as { showdown?: unknown }).showdown);
      },
    },
  );
}
