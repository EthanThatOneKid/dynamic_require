# `etok.codes/dynamic_require`

Require of arbitrary scripts dynamically from the web.

## Purpose

`dynamic_require` is a simple async function that allows you to import scripts
dynamically from the web into the global scope. It's useful for importing
scripts that are publicly available on the web.

## Known limitations

The `dynamic_require` function is not a drop-in replacement for
`dynamic_require` in node. It does not support loading local files, or loading
modules from `node_modules`. It also does not support loading modules that are
not publicly available on the web.

The `dynamic_require` function is like a replacement for `import` in the
browser. It supports loading modules from the web. This API allows you to load
modules via [_bookmarklet_](https://deno.land/x/bmt).

## Usage

```html
<script type="module">
    import { dynamicRequire } from "https://bundle.deno.dev/https://etok.codes/dynamic_require/raw/main/mod.ts";

    await dynamicRequire("https://cdn.jsdelivr.net/npm/showdown@latest/dist/showdown.min.js");
    const converter = new showdown.Converter();
    const html = converter.makeHtml("# Hello, markdown!");
    document.body.innerHTML = html;
</script>
```

View results on [CodePen](https://codepen.io/EthanDavidson/pen/ZEjLLwP).

## License

[MIT License](LICENSE)

---

Built with <3 by [**@EthanThatOneKid**](https://etok.codes).
