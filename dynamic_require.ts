export interface DynamicOptions {
  check?: () => boolean;
  module?: boolean;
}

/**
 * dynamicRequire dynamically imports the specified script.
 */
export async function dynamicRequire(
  specifier: string,
  options: DynamicOptions = {},
): Promise<boolean> {
  if (options.check && options.check()) {
    return true;
  }

  const script = document.createElement("script");
  script.src = specifier;

  if (options.module) {
    if (!checkModuleSupport()) {
      return false;
    }

    script.type = "module";
  }

  document.head.appendChild(script);

  if (!options.check) {
    return await new Promise((resolve) => {
      script.onload = () => resolve(true);
    });
  }

  return await new Promise((resolve) => {
    script.onload = () => resolve(options.check!());
  });
}

function checkModuleSupport(): boolean {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }

  if ("noModule" in document.createElement("script")) {
    return true;
  }

  throw new Error("Module support is not available in this browser");
}
