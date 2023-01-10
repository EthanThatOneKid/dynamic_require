import { dynamicRequire } from "../../dynamic_require.ts";

export interface ThreeAddonDynamicOptions {
  version?: string;
  check?: () => boolean;
}

// TODO: Add tests.
export async function dynamicRequireThreeAddon(
  path: string,
  options: ThreeAddonDynamicOptions = {},
) {
  const version = options.version || "latest";
  const url = new URL(path, `https://unpkg.com/three@${version}/examples/jsm/`);

  return await dynamicRequire(`${url}`, { module: true, check: options.check });
}
