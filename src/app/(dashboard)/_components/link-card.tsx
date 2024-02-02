import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { FC } from 'react'

interface LinkCardProps {
    title: string;
    url: string;
}

const LinkCard:FC<LinkCardProps> = ({title, url}) => {
  return (
    <div className="p-2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className='text-base font-medium'>{title}</CardTitle>
          <CardDescription className='text-sm'>
           {url}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default LinkCard