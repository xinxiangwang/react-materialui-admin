import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
  }),
);
export default function LazyLoading() {
  const classes = useStyles()
  return (
    <div className={classes.root}>努力加载中... Σ(っ °Д °;)っ</div>
  )
}
