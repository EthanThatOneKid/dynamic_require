import { require } from "../../require.ts";

export interface RequireThreeOptions {
  version?: string;
}

// TODO: Add tests.
export async function requireThree(options: RequireThreeOptions = {}) {
  const version = options.version || "latest";

  return await require(
    `https://unpkg.com/three@${version}/build/three.module.js`,
    {
      module: true,
      check() {
        return Boolean((window as { THREE?: unknown }).THREE);
      },
    },
  );
}
