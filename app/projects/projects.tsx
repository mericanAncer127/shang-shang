'use client';

import { motion } from 'motion/react';
import { projects } from './constants';
import ProjectItem from './project-item';

// const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function Projects() {
  return (
    <>
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ scale: 0.8, opacity: 0, filter: 'blur(2px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <ProjectItem
            index={index}
            title={project.title}
            url={project.url}
            image_src={project.image_src}
            github_url={project.github_url ? project.github_url : ''}
            role={project.role}
          />
        </motion.div>
      ))}
      {/* {breakpoint === 'desktop' && <ProjectPreview modal={modal} projects={projects} />} */}
    </>
  );
}
