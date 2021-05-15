import React from 'react'

export type LineKey = 'newVisitis' | 'messages' | 'purchases' | 'shoppings'

type LineVal = {
  expectedData: Array<number>
  actualData: Array<number>
}

type TLineChartData = {
  [key in LineKey]: LineVal
}

// interface ILineChartData { // why can't use interface
//   [key in LineKey]: LineVal
// }

interface IState {
  lineChartData: TLineChartData
  activeLineKey: LineKey
}

type TAction = IAction<Partial<IState>>

type IContext = {
  state: IState
  dispatch: React.Dispatch<TAction>
}

export const SET_ACTIVE = Symbol()

export const initState: IState = {
  lineChartData: {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130]
    }
  },
  activeLineKey: 'newVisitis'
}

export function dashboardReducer(state: IState, action: TAction) {
  switch(action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const DashboardContext = React.createContext<IContext>({
  state: initState,
  dispatch: () => {}
})