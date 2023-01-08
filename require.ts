export interface RequireOptions {
  check?: () => boolean;
  module?: boolean;
}

/**
 * require the specified module.
 */
export async function require(specifier: string, options: RequireOptions = {}) {
  if (options.check && !options.check()) {
    return;
  }

  const script = document.createElement("script");
  script.src = specifier;

  if (options.module) {
    script.type = "module";
  }

  document.head.appendChild(script);

  return await new Promise<void>((resolve) => {
    script.onload = () => {
      resolve();
    };
  });
}
