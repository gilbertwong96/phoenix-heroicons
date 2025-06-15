[![npm version](https://img.shields.io/npm/v/phoenix-heroicons)](https://www.npmjs.com/package/phoenix-heroicons)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

# Phoenix Heroicons

This plugin is used to integrate [heroicons][heroicons] with the project using the
[Phoenix Framework][phoenix-framework] and [Tailwind CSS][tailwind].


## Usage

1. Add the package into `assets/package.json`:

```bash
pnpm --prefix assets add phoenix-heroicons
```

2. Declare the plugin in the `assets/app.css`:

``` css
@import "tailwindcss" source(none);
@source "../css";
@source "../js";
@source "../../lib/your_app";

@plugin "phoenix-heroicons";
```

3. Run the tailwind command:

```js
mix tailwind your_app
```

## License

MIT © Gilbert Wong. See [LICENSE.md](LICENSE.md) for details.

[heroicons]: https://heroicons.com
[phoenix-framework]: https://www.phoenixframework.org
[tailwind]: https://tailwindcss.com
