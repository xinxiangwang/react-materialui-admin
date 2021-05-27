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

const LineChart: React.FC = () => {
  const { state } = useContext(DashboardContext)
  const chartData = state.lineChartData[state.activeLineKey]
  const chartEl = useRef<HTMLDivElement>(null)
  const chartClasses = useChartStyles()

  useEffect(() => {
    if (chartEl.current) {
      const chart = echarts.init(chartEl.current, 'macarons')
      chart.setOption({
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['expected', 'actual']
        },
        series: [{
          name: 'expected', itemStyle: {
            normal: {
              color: '#FF005A',
              lineStyle: {
                color: '#FF005A',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: chartData.expectedData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: 'actual',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: chartData.actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
      var resizeHandler = debounce(() => {
        chart.resize()
      }, 100)
      window.addEventListener('resize', resizeHandler)
    }
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [chartData])
  return (
    <Paper className={chartClasses.chart} ref={chartEl}></Paper>
  )
}

export default LineChart
