import {AcademicCapIcon, ArrowDownTrayIcon, MapIcon, SparklesIcon, SunIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import hogwards from '../images/hogwards.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Education: 'education',
  Publication: 'publication',
  Stats: 'stats',
  News: 'news',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: hogwards,
  name: `I'm Yunjia Zheng`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        It is our choices, that show what we truly are.
      </p>
    </>
  ),
  actions: [
    {
      href: '/CV_Yunjia_Zheng_full.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      <p className="prose prose-invert prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a first-year PhD student in School of Applied Science and Engineering, Harvard University, advised by Prof.
        <a href="https://junchengyang.com/" target="_blank" rel="noopener noreferrer">
          {' '}
          Juncheng Yang{' '}
        </a>
        . I'm interested in database management systems and storage systems.
      </p>
      <p className="prose prose-invert prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Before joining Harvard, I was fortuate to work with Prof.{' '}
        <a href="https://www.cs.mcgill.ca/~kemme/" target="_blank" rel="noopener noreferrer">
          Bettina Kemme
        </a>{' '}
        and Prof.{' '}
        <a href="https://sites.google.com/view/oanabalmau" target="_blank" rel="noopener noreferrer">
          Oana Balmau
        </a>{' '}
        at McGill University.
      </p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: '150 Western Ave, Allston, MA, 02134', Icon: MapIcon},
    {label: 'Study', text: 'Harvard University', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'Chinese Classical Dance, drama and theatre', Icon: SparklesIcon},
    {label: 'Fun Fact', text: 'allergy to sunlight', Icon: SunIcon},
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2023 - April 2025',
    location: 'McGill University, Canada',
    title: 'Masters In Computer Science',
    content: <p> Thesis: View Management In Graph Databases.</p>,
  },
  {
    date: 'September 2019 - April 2023',
    location: 'McGill University, Canada',
    title: 'Bachelor in Honors. Computer Science',
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2025',
    location: "VLDB'25",
    title: 'G-View: View Management for Graph Databases',
    authors: (
      <>
        <p>
          <strong className="text-grey-300">Yunjia Zheng</strong>,Charlotte Sacré, Mohanna Shahrad, Owen Lipchitz, Yu
          Ting Gu, Bettina Kemme
        </p>
      </>
    ),
  },
  {
    date: 'April 2024',
    location: "ICDEW'24",
    title: 'Towards View Management in Graph Databases',
    paperUrl: 'https://ieeexplore.ieee.org/document/10555088/',
    authors: (
      <>
        <p>
          Mohanna Shahrad,Yu Ting Gu,<strong className="text-grey-300">Yunjia Zheng</strong>, Bettina Kemme
        </p>
      </>
    ),
  },
  {
    date: 'November 2023',
    location: "AIDB@VLDB'23",
    title: 'DBMLSched: Scheduling In-database Machine Learning Jobs',
    paperUrl: 'https://ceur-ws.org/Vol-3462/AIDB3.pdf',
    authors: (
      <>
        <p>
          <strong className="text-grey-300">Yunjia Zheng</strong>,Yuxuan Tian, Joseph Vinish D’Silva, Bettina Kemme
        </p>
      </>
    ),
  },
  {
    date: 'July 2021',
    location: "NetSoft'21",
    title: 'Flow-based Service Type Identification using Deep Learning',
    paperUrl: 'https://ieeexplore.ieee.org/document/9492663/',
    authors: (
      <>
        <p>
          Mona Elsaadawy, Petar Basta, <strong className="text-grey-300">Yunjia Zheng</strong>,Bettina Kemme, Mohamed
          Younis
        </p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      date: 'April 10, 2025',
      text: (
        <>
          <p>
            Our paper{' '}
            <strong className="text-grey-300">
              <a href="null" target="_blank" rel="noopener noreferrer">
                {' '}
                View Management for Graph Databases{' '}
              </a>
            </strong>{' '}
            has been accepted to VLDB 2025! #VLDB2025 #databases #research{' '}
          </p>
        </>
      ),
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'yunjia_zheng@g.harvard.edu',
      href: 'mailto:yunjia_zheng@g.harvard.edu',
    },
    {
      type: ContactType.Location,
      text: '150 Western Ave, Allston, MA, 02134',
      href: 'https://seas.harvard.edu/about-us/visit-us/allston/science-engineering-complex',
    },
    {
      type: ContactType.Instagram,
      text: '@SEVERINA_ZYJ',
      href: 'https://www.instagram.com/severina_zyj/',
    },
    {
      type: ContactType.Github,
      text: 'SeverinaZheng',
      href: 'https://github.com//SeverinaZheng',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com//SeverinaZheng'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yunjia-zheng-886a77182/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/severina_zyj/'},
];
