import React from "react";
import cn from "classnames";
import { useUncontrolled } from "uncontrollable";
import BaseDropdown from "react-overlays/Dropdown";
import useEventCallback from "@restart/hooks/useEventCallback";

import SelectableContext from "./selectable-context";

const Dropdown = React.forwardRef((pprops, ref) => {
  const {
    as,
    show,
    onToggle,
    onSelect,
    className,
    alignRight,
    drop = "down",
    focusFirstItemOnShow,
    ...props
  } = useUncontrolled(pprops, { show: "onToggle" });

  const Component = as || "div";
  const onSelectCtx = React.useContext(SelectableContext);

  const handleToggle = useEventCallback(
    (nextShow, event, source = event.type) => {
      if (event.currentTarget === document) source = "rootClose";
      if (onToggle) {
        onToggle(nextShow, event, { source });
      }
    }
  );

  const handleSelect = useEventCallback((key, event) => {
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
    handleToggle(false, event, "select");
  });

  const classes = cn(`drop${drop}`, { show }, className);

  return (
    <SelectableContext.Provider value={handleSelect}>
      <BaseDropdown
        drop={drop}
        show={show}
        alignEnd={alignRight}
        onToggle={handleToggle}
        focusFirstItemOnShow={focusFirstItemOnShow}
        itemSelector=".dropdown-item:not(.disabled):not(:disabled)"
      >
        {({ props: rest }) => (
          <Component {...props} {...rest} ref={ref} className={classes} />
        )}
      </BaseDropdown>
    </SelectableContext.Provider>
  );
});

export default Dropdown;
