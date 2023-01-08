import { require } from "../../require.ts";

export interface RequireThreeAddonOptions {
  version?: string;
  check?: () => boolean;
}

// TODO: Add tests.
export async function requireThreeAddon(
  path: string,
  options: RequireThreeAddonOptions = {},
) {
  const version = options.version || "latest";
  const url = new URL(path, `https://unpkg.com/three@${version}/examples/jsm/`);

  return await require(`${url}`, { module: true, check: options.check });
}
