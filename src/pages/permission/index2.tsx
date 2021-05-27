import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { IState } from '@/store/types'
import { setRoutes } from '@/store/actions/permission'
import { setInfo } from '@/store/actions/user'

export default function Permission() {
  const dispatch = useDispatch()

  const user = useSelector((state: IState) => {
    return state.user
  })
  const [value, setValue] = React.useState<string>(user.roles ? user.roles[0] : '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    dispatch(setRoutes([event.target.value]))
    dispatch(setInfo({
      ...user,
      roles: [event.target.value]
    }))
  }
  return (
    <div>
      <div>
        {user.roles}
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">user roles</FormLabel>
        <RadioGroup aria-label="user roles" name="user roles" value={value} onChange={handleChange}>
          <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          <FormControlLabel value="editor" control={<Radio />} label="Editor" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
