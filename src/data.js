//  icons
import {
  FiTwitter,
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/Kingstalux',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/ngu-kingsely-junior-cho-974b60136/',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/NguKingsley',
  },
  {
    icon: <FiFacebook />,
    href: 'https://web.facebook.com/profile.php?id=100008128245727',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'UI/UX design',
    desc: 'project1',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'web development',
    desc: 'project2',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'UI/UX design',
    desc: 'project3',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
    desc: 'project4',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
    desc: 'project5',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
    desc: 'project6',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Front End',
    description:
      'Deal with the interface and user-facing systems Develop the navigation, interface, and visuals Focus on user experience Utilize HTML, CSS3, and JavaScript.',
  },
  {
    icon: <FiSettings />,
    name: 'Back End',
    description:
      'Deal with the server and database of the application Create the back frame that allows the front end development to exist Utilize Ruby, and Ruby on rails.',
  },
  {
    icon: <FiPenTool />,
    name: 'Database',
    description:
      'Deal with the information stored in the user database. Utilize Postgresql, NodeJs. Store user information into database..',
  },
  {
    icon: <FiTag />,
    name: 'Full-Stack',
    description:
      ' Deal with the overlap between the front end and back end. Utilize all the coding languages of the first two plus MySQL. Take responsibility for the entire experience to make sure it goes smoothly.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Kingsley is a must-have for a mob-programming season, he has rich ideas and expresses them professionally. he also has an eye for design and organization, qualities I found greatly useful in projects we worked on together. His stacks include React, Redux, and JavaScript.',
    authorName: 'Alexander Odufuye',
    authorPosition: 'Frontend Developer, Technical Support Engineer',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Kingsley is a fantastic developer, he is very detail-oriented and technical, great with javascript and debugging code. I have collaborated with him a couple of times through pair-programming and it’s always such fun working with him, he approaches his work with much precision and calmness. He is such a fun individual to work with and I can’t recommend him enough.',
    authorName: 'Stephanie Ugboaja',
    authorPosition: 'Software Developer',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'kingsleyngu25@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Yaounde, Cameroon',
    description: 'Serving clients worldwide',
  },
];
