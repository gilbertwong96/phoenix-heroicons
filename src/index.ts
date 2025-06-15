import plugin from 'tailwindcss/plugin';
import type { PluginAPI } from 'tailwindcss/plugin';
import path from "path";
import fs from "fs";

export default plugin(function({ matchComponents, theme }: PluginAPI) {
  let iconsDir = path.join(process.cwd(), "deps", "heroicons", "optimized")
  let values: Record<string, string> = {}
  let icons = [
    ["", "/24/outline"],
    ["-solid", "/24/solid"],
    ["-mini", "/20/solid"],
    ["-micro", "/16/solid"]
  ]

  icons.forEach(([suffix, dir]) => {
    fs.readdirSync(path.join(iconsDir, dir)).forEach(file => {
      let name = path.basename(file, ".svg") + suffix
      values[name] = path.join(iconsDir, dir, file)
    })
  })

  matchComponents({
    "hero": (value: string) => {
      const fullPath = value
      const name = path.basename(fullPath, path.extname(fullPath))
      let content = fs.readFileSync(fullPath).toString().replace(/\r?\n|\r/g, "")
      content = encodeURIComponent(content)
      let size = theme("spacing.6")
      if (name.endsWith("-mini")) {
        size = theme("spacing.5")
      } else if (name.endsWith("-micro")) {
        size = theme("spacing.4")
      }
      return {
        [`--hero-${name}`]: `url('data:image/svg+xml;utf8,${content}')`,
        "-webkit-mask": `var(--hero-${name})`,
        "mask": `var(--hero-${name})`,
        "mask-repeat": "no-repeat",
        "background-color": "currentColor",
        "vertical-align": "middle",
        "display": "inline-block",
        "width": size,
        "height": size
      }
    }
  }, {values})
}) as ReturnType<typeof plugin>

