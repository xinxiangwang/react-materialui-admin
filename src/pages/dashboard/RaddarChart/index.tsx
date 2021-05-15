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
const animationDuration = 3000
require('echarts/theme/macarons') // echarts theme

const RaddarChart: React.FC = () => {
  const { state } = useContext(DashboardContext)
  const chartData = state.lineChartData[state.activeLineKey]
  const chartEl = useRef<HTMLDivElement>(null)
  const chartClasses = useChartStyles()

  useEffect(() => {
    if (chartEl.current) {
      const chart = echarts.init(chartEl.current, 'macarons')
      chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: 'Sales', max: 10000 },
            { name: 'Administration', max: 20000 },
            { name: 'Information Technology', max: 20000 },
            { name: 'Customer Support', max: 20000 },
            { name: 'Development', max: 20000 },
            { name: 'Marketing', max: 20000 }
          ]
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: 'Allocated Budget'
            },
            {
              value: [4000, 9000, 15000, 15000, 13000, 11000],
              name: 'Expected Spending'
            },
            {
              value: [5500, 11000, 12000, 15000, 12000, 12000],
              name: 'Actual Spending'
            }
          ],
          animationDuration
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
  }, [chartData, chartEl.current])
  return (
    <Paper className={chartClasses.chart} ref={chartEl}></Paper>
  )
}

export default RaddarChart
