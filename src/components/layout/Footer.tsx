// import React from 'react';
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import Container from '../common/Container';

// interface Footer7Props {
//   logo?: {
//     url: string;
//     src: string;
//     alt: string;
//     title: string;
//   };
//   sections?: Array<{
//     title: string;
//     links: Array<{ name: string; href: string }>;
//   }>;
//   description?: string;
//   socialLinks?: Array<{
//     icon: React.ReactElement;
//     href: string;
//     label: string;
//   }>;
//   copyright?: string;
//   legalLinks?: Array<{
//     name: string;
//     href: string;
//   }>;
// }

// const defaultSections = [
//   {
//     title: 'Product',
//     links: [
//       { name: 'Overview', href: '#' },
//       { name: 'Pricing', href: '#' },
//       { name: 'Marketplace', href: '#' },
//       { name: 'Features', href: '#' },
//     ],
//   },
//   {
//     title: 'Company',
//     links: [
//       { name: 'About', href: '#' },
//       { name: 'Team', href: '#' },
//       { name: 'Blog', href: '#' },
//       { name: 'Careers', href: '#' },
//     ],
//   },
//   {
//     title: 'Resources',
//     links: [
//       { name: 'Help', href: '#' },
//       { name: 'Sales', href: '#' },
//       { name: 'Advertise', href: '#' },
//       { name: 'Privacy', href: '#' },
//     ],
//   },
// ];

// const defaultSocialLinks = [
//   { icon: <FaInstagram className="size-5" />, href: '#', label: 'Instagram' },
//   { icon: <FaFacebook className="size-5" />, href: '#', label: 'Facebook' },
//   { icon: <FaTwitter className="size-5" />, href: '#', label: 'Twitter' },
//   { icon: <FaLinkedin className="size-5" />, href: '#', label: 'LinkedIn' },
// ];

// const defaultLegalLinks = [
//   { name: 'Terms and Conditions', href: '#' },
//   { name: 'Privacy Policy', href: '#' },
// ];

// const Footer = ({
//   logo = {
//     url: 'https://www.shadcnblocks.com',
//     src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg',
//     alt: 'logo',
//     title: 'Shadcnblocks.com',
//   },
//   sections = defaultSections,
//   description = 'A collection of components for your startup business or side project.',
//   socialLinks = defaultSocialLinks,
//   copyright = '© 2024 Shadcnblocks.com. All rights reserved.',
//   legalLinks = defaultLegalLinks,
// }: Footer7Props) => {
//   return (
//     <Container>
//       <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
//         <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
//           {/* Logo */}
//           <div className="flex items-center gap-2 lg:justify-start">
//             <a href={logo.url}>
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 title={logo.title}
//                 className="h-8"
//               />
//             </a>
//             <h2 className="text-xl font-semibold">{logo.title}</h2>
//           </div>
//           <p className="text-muted-foreground max-w-[70%] text-sm">
//             {description}
//           </p>
//           <ul className="text-muted-foreground flex items-center space-x-6">
//             {socialLinks.map((social, idx) => (
//               <li key={idx} className="hover:text-primary font-medium">
//                 <a href={social.href} aria-label={social.label}>
//                   {social.icon}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
//           {sections.map((section, sectionIdx) => (
//             <div key={sectionIdx}>
//               <h3 className="mb-4 font-bold">{section.title}</h3>
//               <ul className="text-muted-foreground space-y-3 text-sm">
//                 {section.links.map((link, linkIdx) => (
//                   <li key={linkIdx} className="hover:text-primary font-medium">
//                     <a href={link.href}>{link.name}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
//         <p className="order-2 lg:order-1">{copyright}</p>
//         <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
//           {legalLinks.map((link, idx) => (
//             <li key={idx} className="hover:text-primary">
//               <a href={link.href}> {link.name}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Container>
//   );
// };

// export default Footer;

import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Container from '../common/Container';
import { Link } from 'react-router';

interface FooterProps {
  logo?: {
    url: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: 'Platform',
    links: [
      { name: 'Book a Ride', href: '/rides/request' },
      { name: 'Driver Portal', href: '/driver/dashboard' },
      { name: 'Rider Dashboard', href: '/rider/dashboard' },
      { name: 'Features', href: '/features' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Sales', href: '/contact' },
      { name: 'Safety', href: '/safety' },
      { name: 'Privacy', href: '/privacy' },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <FaInstagram className="size-5" />,
    href: 'https://instagram.com/ridesphere',
    label: 'Instagram',
  },
  {
    icon: <FaFacebook className="size-5" />,
    href: 'https://facebook.com/ridesphere',
    label: 'Facebook',
  },
  {
    icon: <FaTwitter className="size-5" />,
    href: 'https://twitter.com/ridesphere',
    label: 'Twitter',
  },
  {
    icon: <FaLinkedin className="size-5" />,
    href: 'https://linkedin.com/company/ridesphere',
    label: 'LinkedIn',
  },
];

const defaultLegalLinks = [
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const Footer = ({
  logo = {
    url: '/',
    alt: 'RideSphere Logo',
    title: 'RideSphere',
  },
  sections = defaultSections,
  description = 'RideSphere is your trusted ride-booking platform, connecting riders with safe and reliable drivers anytime, anywhere.',
  socialLinks = defaultSocialLinks,
  copyright = '© 2025 RideSphere. All rights reserved.',
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  return (
    <Container>
      <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
        <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
          {/* Logo */}
          <div className="flex items-center gap-2 lg:justify-start">
            <Link to={logo.url}>
              <svg
                width="45"
                height="35"
                viewBox="0 0 50 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43 31L31 40H5L7 35L12 31H29L32 35L40 11L45 7H50L43 31ZM43 5L38 9H21L18 5L10 29L5 33H0L7 9L19 0H45L43 5ZM24 13H35L29 31L26 27H15L21 9L24 13Z"
                  fill="#297AFF"
                ></path>
              </svg>
            </Link>
            <h2 className="text-2xl font-semibold">{logo.title}</h2>
          </div>
          <p className="text-muted-foreground max-w-[70%] text-sm">
            {description}
          </p>
          <ul className="text-muted-foreground flex items-center space-x-6">
            {socialLinks.map((social, idx) => (
              <li key={idx} className="hover:text-primary font-medium">
                <Link
                  to={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul className="text-muted-foreground space-y-3 text-sm">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="hover:text-primary font-medium">
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
        <p className="order-2 lg:order-1">{copyright}</p>
        <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
          {legalLinks.map((link, idx) => (
            <li key={idx} className="hover:text-primary">
              <Link to={link.href}> {link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
