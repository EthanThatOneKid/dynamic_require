import { dynamicRequireThreeAddon } from "./three_addon.ts";

export interface ThreeAddonOrbitControlsDynamicOptions {
  version?: string;
}

// TODO: Add tests.
export async function dynamicRequireThreeAddonOrbitControls(
  options: ThreeAddonOrbitControlsDynamicOptions = {},
) {
  return await dynamicRequireThreeAddon(
    "controls/OrbitControls.js",
    {
      version: options.version,
      check() {
        return Boolean(
          (window as { THREE?: { OrbitControls?: unknown } }).THREE
            ?.OrbitControls,
        );
      },
    },
  );
}
