import * as HoverCard from '@radix-ui/react-hover-card';

export function ProjectCard({ project }) {

    let projectTags = project.tags.map(tag => <Tags key={crypto.randomUUID} content={tag} />)

    return (
        <HoverCard.Root openDelay={100} closeDelay={100}>
            <HoverCard.Trigger asChild>
                <a href={project.deployLink} className='w-fit h-fit'>
                    <img src={project.thumbnail} alt="" className='aspect-video w-96 rounded-sm ring-amber-700/20 hover:ring-4 transition-all duration-75' />
                </a>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content asChild>
                    <div className='bg-white p-5 mt-2 w-[400px] shadow-sm rounded-sm'>
                        {project.description}
                        <div className='flex gap-1 mt-5'>
                            {projectTags}
                        </div>

                    </div>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}

export function Tags({ content }) {
    return (
        <div className='px-3 py-1 bg-amber-100 border text-amber-800 border-amber-300 text-xs rounded-full'>
            {content}
        </div>
    )
}

