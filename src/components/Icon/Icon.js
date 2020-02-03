import React, { forwardRef } from "react";
import { Svg } from "../Svg";
import { iconPaths } from "./IconPaths";

const Icon = forwardRef(
  (
    {
      size = "1em",
      name,
      color = "currentColor",
      role = "presentation",
      focusable = false,
      ...rest
    },
    ref,
  ) => {
    // Fallback in case you pass the wrong name
    const iconFallback = iconPaths[name];

    const path =
      iconPaths[name] == null ? iconFallback.path : iconPaths[name].path;

    const viewBox =
      (iconPaths[name] == null
        ? iconFallback.viewBox
        : iconPaths[name].viewBox) || "0 0 24 24";

    return (
      <Svg
        ref={ref}
        size={size}
        viewBox={viewBox}
        display="inline-block"
        verticalAlign="middle"
        focusable={focusable}
        role={role}
        {...rest}
      >
        {path}
      </Svg>
    );
  },
);

Icon.displayName = "Icon";

export default Icon;
