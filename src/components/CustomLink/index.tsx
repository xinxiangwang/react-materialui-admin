import React, { useMemo, forwardRef } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { LocationState } from 'history'

type TLink = LinkProps<LocationState>

const CustomLink = (to: TLink['to']) => {
  return useMemo(() => forwardRef<HTMLAnchorElement, {}>(
    (linkProps, ref) => (
      <Link ref={ref} to={to} {...linkProps} />
    )
  ), [to])
}

export default CustomLink