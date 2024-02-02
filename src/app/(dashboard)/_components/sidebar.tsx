import React from 'react'
import LabelCard from './label-card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='h-full  flex flex-col overflow-y-auto bg-white shadow-sm'>
        <div className='pt-6 '>
        {/* Logo */}
        </div>
        <div className='pt-8 flex flex-col w-full space-y-3'>
        <LabelCard label='project'/>
        <LabelCard label='idea'/>
        <LabelCard label='react'/>
        <LabelCard label='db'/>
        <LabelCard label='rust'/>
        <Button className='w-52 mx-auto' variant={'outline'}><Plus className="w-4 h-4 mr-2"/>Add label</Button>
        </div>
        <div className='mx-2 py-3 space-y-3'>
<Button variant={'secondary'} className='w-52 mx-auto'>Setting</Button>
        </div>
    </div>
  )
}

export default Sidebar