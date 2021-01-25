import React from "react";
import cn from "classnames";

const Table = React.forwardRef(
  (
    { card, center, nowrap, className, datatable, responsive, ...props },
    ref
  ) => {
    const classes = cn(
      "table",
      {
        datatable,
        "card-table": card,
        "text-nowrap": nowrap,
        "table-vcenter": center
      },
      className
    );

    const table = <table {...props} className={classes} ref={ref} />;
    if (responsive) {
      return <div className="table-responsive">{table}</div>;
    }

    return table;
  }
);

export default Table;
