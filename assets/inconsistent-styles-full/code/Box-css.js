import React from 'react';
import cx from 'clsx';

export default function Box({ m, mt, mr, mb, ml, p, pt, pr, pb, pl, ...props }) {
  return (
    <div
      className={cx('Box', {
        [`Box-margin--${m}`]: m,
        [`Box-marginTop--${mt}`]: mt,
        [`Box-marginRight--${mr}`]: mr,
        [`Box-marginBottom--${mb}`]: mb,
        [`Box-marginLeft--${ml}`]: ml,
        [`Box-padding--${p}`]: p,
        [`Box-paddingTop--${pt}`]: pt,
        [`Box-paddingRight--${pr}`]: pr,
        [`Box-paddingBottom--${pb}`]: pb,
        [`Box-paddingLeft--${pl}`]: pl
      })}
      {...props}
    />
  );
}
