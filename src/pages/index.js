import React from 'react';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
  return (
    <>
      <Seo title='JSmiles Frontend Dev Portfolio' />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId='hero' />
        <AboutSection sectionId='about' heading='Bio' />
        <InterestsSection sectionId='details' heading='Tools I Use' />
        <ProjectsSection sectionId='features' heading='Projects' />
        <ContactSection sectionId='github' heading='Whats Next?' />
      </Page>
    </>
  );
}
