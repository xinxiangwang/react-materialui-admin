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

const animationDuration = 6000

require('echarts/theme/macarons') // echarts theme

const BarChart: React.FC = () => {
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
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
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
  }, [chartData])
  return (
    <Paper className={chartClasses.chart} ref={chartEl}></Paper>
  )
}

export default BarChart
