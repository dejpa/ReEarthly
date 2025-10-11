// Navigation links configuration
export interface NavLink {
  href: string;
  key: string;
  label: string;
  description?: string;
}

// Main navigation links
export const mainNavLinks: NavLink[] = [
  {
    href: '/',
    key: 'home',
    label: 'Home',
    description: 'Go to homepage'
  },
  {
    href: '/about',
    key: 'about',
    label: 'About',
    description: 'Learn more about reEarthly'
  },
  {
    href: '/solutions',
    key: 'solutions',
    label: 'Solutions',
    description: 'Explore our environmental solutions'
  },
  {
    href: '/contact',
    key: 'contact',
    label: 'Contact',
    description: 'Get in touch with us'
  }
];

// Footer navigation sections
export interface FooterSection {
  title: string;
  links: NavLink[];
}

export const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      {
        href: '/about',
        key: 'about',
        label: 'About',
        description: 'Learn about our mission and values'
      },
      {
        href: '/leadership',
        key: 'leadership',
        label: 'Leadership',
        description: 'Meet our leadership team'
      }
    ]
  },
  {
    title: 'Solutions',
    links: [
      {
        href: '/solutions/carbon-management',
        key: 'carbonManagement',
        label: 'Carbon Management',
        description: 'Carbon footprint tracking and reduction'
      },
      {
        href: '/solutions/circular-economy',
        key: 'circularEconomy',
        label: 'Circular Economy',
        description: 'Waste reduction and resource optimization'
      },
      {
        href: '/solutions/water-conservation',
        key: 'waterConservation',
        label: 'Water Conservation',
        description: 'Smart water management solutions'
      },
      {
        href: '/solutions/ecosystem-restoration',
        key: 'ecosystemRestoration',
        label: 'Ecosystem Restoration',
        description: 'Nature restoration and biodiversity'
      }
    ]
  }
];

// Social media links
export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  description: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/reearthly',
    icon: 'faInstagram',
    description: 'Follow us on Instagram'
  },
  {
    name: 'X',
    href: 'https://x.com/reearthly',
    icon: 'faXTwitter',
    description: 'Follow us on X'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/reearthly',
    icon: 'faLinkedin',
    description: 'Connect with us on LinkedIn'
  },
  {
    name: 'Email',
    href: 'mailto:contact@reearthly.com',
    icon: 'faEnvelope',
    description: 'Send us an email'
  }
];

// Legal links
export const legalLinks: NavLink[] = [
  {
    href: '/privacy',
    key: 'privacy',
    label: 'Privacy Policy',
    description: 'Read our privacy policy'
  },
  {
    href: '/terms',
    key: 'terms',
    label: 'Terms of Service',
    description: 'Read our terms of service'
  },
  {
    href: '/cookies',
    key: 'cookies',
    label: 'Cookie Policy',
    description: 'Learn about our cookie usage'
  }
];

// Helper function to get navigation links by section
export const getNavLinksBySection = (sectionKey: string): NavLink[] => {
  const section = footerSections.find(section => section.title.toLowerCase() === sectionKey.toLowerCase());
  return section ? section.links : [];
};

// Helper function to get all navigation links
export const getAllNavLinks = (): NavLink[] => {
  return mainNavLinks.concat(
    ...footerSections.map(section => section.links),
    legalLinks
  );
};

export default {
  mainNavLinks,
  footerSections,
  socialLinks,
  legalLinks,
  getNavLinksBySection,
  getAllNavLinks
};
