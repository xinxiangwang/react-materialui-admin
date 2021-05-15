import React, { useReducer,  } from 'react'
import PanelGroup from './PanelGroup'
import LineChart from './LineChart'
import { DashboardContext, dashboardReducer, initState } from './store'



const Dashboard: React.FC = () => {
  const [state, dispatch] = useReducer(dashboardReducer, initState);
  return (
    <DashboardContext.Provider value={{state, dispatch}}>
      <PanelGroup />
      <LineChart />
    </DashboardContext.Provider>
  )
}

export default Dashboard
