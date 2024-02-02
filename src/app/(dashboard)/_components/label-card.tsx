import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader,  } from '@/components/ui/card'
import React, { FC } from 'react'


interface LabelCardProps {
    label: string
}



const LabelCard:FC<LabelCardProps> = ({label}) => {
  return (
    <div>
<Button variant={'outline'} className='w-52 mx-2  font-medium'>{label}</Button>
    </div>
  )
}

export default LabelCard