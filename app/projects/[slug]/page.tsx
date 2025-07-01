'use client'
import { useParams } from 'next/navigation'
import projectsData from '@/data/projectsData'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export default function ProjectPage() {
  const params = useParams()
  const slug = params?.slug

  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      {project.imgSrc && (
        <Image
          src={project.imgSrc}
          alt={project.title}
          width={800}
          height={450}
          className="w-full max-w-4xl rounded-md mb-6"
        />
      )}
      <p className="text-lg text-gray-700 dark:text-gray-300">{project.description}</p>
    </div>
  )
}
