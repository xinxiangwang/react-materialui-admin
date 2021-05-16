import React, { useState, useEffect } from 'react'
export default (loader: any) => {
  const LoadAble: React.FC = () => {
    const [LoadedCom, setLoadedCom] = useState<React.ComponentType>()

    useEffect(() => {
      loader().then((res: any) => {
        setLoadedCom(res.default)
      })
    })
    
    return (
      LoadedCom ? <LoadedCom /> : <div>loading</div>
    )
  }
  return LoadAble
}