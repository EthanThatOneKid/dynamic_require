export interface RequireOptions {
  check?: () => boolean;
  module?: boolean;
}

/**
 * require the specified module.
 */
export async function require(
  specifier: string,
  options: RequireOptions = {},
): Promise<boolean> {
  if (options.check && options.check()) {
    return true;
  }

  const script = document.createElement("script");
  script.src = specifier;

  if (options.module) {
    script.type = "module";
  }

  document.head.appendChild(script);

  return await new Promise((resolve) => {
    script.onload = () => resolve(true);
  });
}
