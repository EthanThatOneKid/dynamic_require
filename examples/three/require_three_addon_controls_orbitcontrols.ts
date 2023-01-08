import { requireThreeAddon } from "./require_three_addon.ts";

export interface RequireThreeAddonControlsOrbitControlsOptions {
  version?: string;
}

// TODO: Add tests.
export async function requireThreeAddonControlsOrbitControls(
  options: RequireThreeAddonControlsOrbitControlsOptions = {},
) {
  return await requireThreeAddon(
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
