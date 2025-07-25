import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <>
      <Section className="bg-neutral-100" sectionId={SectionId.Education}>
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          <ResumeSection title="Education">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
        </div>
      </Section>
      <Section className="bg-neutral-100" sectionId={SectionId.Publication}>
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          <ResumeSection title="Publication">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
        </div>
      </Section>
    </>
  );
});

Resume.displayName = 'Resume';
export default Resume;
