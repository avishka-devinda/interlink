import React from 'react'
import LinkCard from '../../_components/link-card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const Linkpage = () => {
  return (
    <div>
      <div className='flex justify-end mx-3'>
<Button>
  <Plus className='w-4 h-4 mr-2'/>Add Link</Button>
      </div>
    <div className='grid lg:grid-cols-2 lg:grid-5'>
      <LinkCard title='next.js 14.1.0 new update' url="https://nextjs.org/version/14.1.0"/>
      <LinkCard title='next.js 14.1.0 new update' url="https://nextjs.org/version/14.1.0"/>
      <LinkCard title='next.js 14.1.0 new update' url="https://nextjs.org/version/14.1.0"/>

    </div>
    </div>
  )
}

export default Linkpage