import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import React from 'react'

interface ProjectImageModalProps {
  children: React.ReactNode
  imageUrl: string
  projectName: string
}

export function ProjectImageModal({ children, imageUrl, projectName }: ProjectImageModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="p-0 !w-[90vw] max-w-7xl max-h-[90vh] border-transparent overflow-hidden"
        closeClassName="mix-blend-difference"
      >
        <Image
          src={imageUrl}
          alt={`Preview of ${projectName} project`}
          className="w-full h-full"
          width={1280}
          height={720}
        />
      </DialogContent>
    </Dialog>
  )
}
