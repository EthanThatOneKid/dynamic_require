# `etok.codes/require`

Require arbitrary scripts.

## Purpose

`require` is a simple async function that allows you to require arbitrary
scripts from the web. It's useful for loading scripts that are publicly
available on the web, but not available on npm.

## Known limitations

The `require` function is not a drop-in replacement for `require` in node. It
does not support loading local files, or loading modules from `node_modules`. It
also does not support loading modules that are not publicly available on the
web.

The `require` function is like a replacement for `import` in the browser. It
supports loading modules from the web. This API allows you to load modules via
[_bookmarklet_](https://deno.land/x/bmt).

## Usage

```html
<script type="module">
    import { require } from "https://bundle.deno.dev/https://etok.codes/require/raw/main/mod.ts";

    await require("https://cdn.jsdelivr.net/npm/showdown@latest/dist/showdown.min.js");
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
