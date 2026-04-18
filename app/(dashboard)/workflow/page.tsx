import { PlusIcon, WorkflowIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import React from 'react'

const page = () => {
  return (
    <div className="min-h-auto">
      <div className="py-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Workflow</h1>
          <p className="text-muted-foreground mt-1">Create a agent workflow</p>
        </div>
        <Button>
          <PlusIcon size={18}/>
          New Workflow
        </Button>
      </div>
      <div>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <WorkflowIcon />
            </EmptyMedia>
            <EmptyTitle>No data</EmptyTitle>
            <EmptyDescription>No data found</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Add data</Button>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  )
}

export default page