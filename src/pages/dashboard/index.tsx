import React, { useReducer,  } from 'react'
import { Grid } from '@material-ui/core'
import PanelGroup from './PanelGroup'
import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'
import RaddarChart from './RaddarChart'
import TransactionTable from './TransactionTable'
import { DashboardContext, dashboardReducer, initState } from './store'

const Dashboard: React.FC = () => {
  const [state, dispatch] = useReducer(dashboardReducer, initState);
  return (
    <DashboardContext.Provider value={{state, dispatch}}>
      <PanelGroup />
      <LineChart />
      <Grid container spacing={2} direction="row">
        <Grid item lg={4} xs={12} sm={12}>
          <RaddarChart />
        </Grid>
        <Grid item lg={4} xs={12} sm={12}>
          <PieChart />
        </Grid>
        <Grid item lg={4} xs={12} sm={12}>
          <BarChart />
        </Grid>
      </Grid>
      
      <Grid container spacing={2} direction="row">
        <Grid item lg={5} xs={12} sm={12}>
          <TransactionTable />
        </Grid>
        <Grid item lg={4} xs={12} sm={6}></Grid>
        <Grid item lg={3} xs={12} sm={6}></Grid>
      </Grid>
    </DashboardContext.Provider>
  )
}

export default Dashboard
