import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import { Message, ShoppingCart, PermIdentity, MonetizationOn } from '@material-ui/icons'
import { usePanelStyles } from './useStyles'

const PanemGroup: React.FC = () => {
  const panelClasses = usePanelStyles()
  return (
    <Grid container spacing={3} direction="row" justify="space-between">
      <Grid item lg={3} xs={12} sm={6}>
        <Paper classes={panelClasses}>
          <div className="icon visit"><PermIdentity /></div>
          <div className="num">
            <p className="title">New Visits</p>
            <p className="content">102,402</p>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <Paper classes={panelClasses}>
          <div className="icon message"><Message /></div>
          <div className="num">
            <p className="title">Messages</p>
            <p className="content">102,402</p>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <Paper classes={panelClasses}>
          <div className="icon purchase"><MonetizationOn /></div>
          <div className="num">
            <p className="title">Purchases</p>
            <p className="content">102,402</p>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <Paper classes={panelClasses}>
          <div className="icon shop"><ShoppingCart /></div>
          <div className="num">
            <p className="title">Shoppings</p>
            <p className="content">102,402</p>
          </div>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default PanemGroup
