[![npm version](https://img.shields.io/npm/v/phoenix-heroicons)](https://www.npmjs.com/package/phoenix-heroicons)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![CI](https://github.com/gilbertwong96/phoenix-heroicons/actions/workflows/ci.yml/badge.svg)](https://github.com/gilbertwong96/phoenix-heroicons/actions/workflows/ci.yml)

# Phoenix Heroicons

This plugin is used to integrate [heroicons][heroicons] with the project using the
[Phoenix Framework][phoenix-framework] and [Tailwind CSS][tailwind].


## Usage

1. Declare heroicons dependency in mix.exs:

``` elixir
defp deps do
  [
    ...
    {:heroicons,
     github: "tailwindlabs/heroicons",
     tag: "v2.1.1",
     sparse: "optimized",
     app: false,
     compile: false,
     depth: 1}
    ...
  ]
end
```

2. Add the package into `assets/package.json`:

```bash
pnpm --prefix assets add phoenix-heroicons
```

3. Declare the plugin in the `assets/app.css`:

``` css
@import "tailwindcss" source(none);
@source "../css";
@source "../js";
@source "../../lib/your_app_web";

@plugin "phoenix-heroicons";
```

4. Run the tailwind command:

```js
mix tailwind your_app
```

## License

MIT © Gilbert Wong. See [LICENSE.md](LICENSE.md) for details.

[heroicons]: https://heroicons.com
[phoenix-framework]: https://www.phoenixframework.org
[tailwind]: https://tailwindcss.com
