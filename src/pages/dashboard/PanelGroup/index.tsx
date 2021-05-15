import React, { useContext } from 'react'
import { Paper, Grid } from '@material-ui/core'
import { Message, ShoppingCart, PermIdentity, MonetizationOn } from '@material-ui/icons'
import { usePanelStyles } from './useStyles'
import { DashboardContext, SET_ACTIVE, LineKey } from '../store'

const PanemGroup: React.FC = () => {
  const panelClasses = usePanelStyles()
  const { state, dispatch } = useContext(DashboardContext)
  const handleClick = (key: LineKey) => {
    dispatch({
      type: SET_ACTIVE,
      payload: {
        activeLineKey: key
      }
    })
  }
  console.log(state)
  return (
    <Grid container spacing={3} direction="row" justify="space-between">
      <Grid item lg={3} xs={12} sm={6}>
        <Paper classes={panelClasses} onClick={() => handleClick('newVisitis')}>
          <div className="icon visit"><PermIdentity /></div>
          <div className="num">
            <p className="title">New Visits</p>
            <p className="content">102,402</p>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <Paper classes={panelClasses} onClick={() => handleClick('messages')}>
          <div className="icon message"><Message /></div>
          <div className="num">
            <p className="title">Messages</p>
            <p className="content">102,402</p>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <Paper classes={panelClasses} onClick={() => handleClick('purchases')}>
          <div className="icon purchase"><MonetizationOn /></div>
          <div className="num">
            <p className="title">Purchases</p>
            <p className="content">102,402</p>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <Paper classes={panelClasses} onClick={() => handleClick('shoppings')}>
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
