import React, { useContext, useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import { Paper, debounce } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { DashboardContext } from '../store'

const useChartStyles = makeStyles((theme: Theme) =>
  createStyles({
    'chart': {
      width: '100%',
      height: '350px',
      marginTop: theme.spacing(2)
    }
  })
)

require('echarts/theme/macarons') // echarts theme

const PieChart: React.FC = () => {
  const { state } = useContext(DashboardContext)
  const chartData = state.lineChartData[state.activeLineKey]
  const chartEl = useRef<HTMLDivElement>(null)
  const chartClasses = useChartStyles()

  useEffect(() => {
    if (chartEl.current) {
      const chart = echarts.init(chartEl.current, 'macarons')
      chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
        },
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 320, name: 'Industries' },
              { value: 240, name: 'Technology' },
              { value: 149, name: 'Forex' },
              { value: 100, name: 'Gold' },
              { value: 59, name: 'Forecasts' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
      var resizeHandler = debounce(() => {
        chart.resize()
      }, 100)
      window.addEventListener('resize', resizeHandler)
    }
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [chartData, chartEl.current])
  return (
    <Paper className={chartClasses.chart} ref={chartEl}></Paper>
  )
}

export default PieChart
