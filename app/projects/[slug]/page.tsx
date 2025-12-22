import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects-data';
import { ProblemSection } from '@/components/case-study/problem-section';
import { SolutionSection } from '@/components/case-study/solution-section';
import { ImpactSection } from '@/components/case-study/impact-section';
import { TechStackSection } from '@/components/case-study/tech-stack-section';
import { GallerySection } from '@/components/case-study/gallery-section';
import { ImprovementsSection } from '@/components/case-study/improvements-section';
import { CaseStudyNavigation } from '@/components/case-study/navigation';
import { CaseStudyHero } from '@/components/case-study/hero';

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.subtitle,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: [project.thumbnail],
    },
  };
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <CaseStudyHero project={project} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <ProblemSection problem={project.problem} />
        
        <SolutionSection solution={project.solution} />
        
        <ImpactSection impact={project.impact} />
        
        <TechStackSection techStack={project.techStack} />
        
        <GallerySection gallery={project.gallery} title={project.title} />
        
        <ImprovementsSection 
          improvements={project.improvements}
          challenges={project.challenges}
        />
        
        <CaseStudyNavigation currentSlug={params.slug} />
      </div>
    </div>
  );
}
