import { dynamicRequire } from "../../dynamic_require.ts";

export interface ThreeDynamicOptions {
  version?: string;
}

// TODO: Add tests.
export async function dynamicRequireThree(options: ThreeDynamicOptions = {}) {
  const version = options.version || "latest";

  return await dynamicRequire(
    `https://unpkg.com/three@${version}/build/three.module.js`,
    {
      module: true,
      check() {
        return Boolean((window as { THREE?: unknown }).THREE);
      },
    },
  );
}
