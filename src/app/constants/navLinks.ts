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
    href: '/blog',
    key: 'blog',
    label: 'Blog',
    description: 'Read our latest articles'
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
    title: 'Technology',
    links: [
      {
        href: '/technology-overview',
        key: 'technology-overview',
        label: 'Overview',
        description: 'Technology overview and solutions'
      },
      {
        href: '/energy-storage',
        key: 'energy-storage',
        label: 'Energy Storage',
        description: 'Energy storage solutions'
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
    name: 'Twitter',
    href: 'https://twitter.com/reearthly',
    icon: '𝕏',
    description: 'Follow us on Twitter/X'
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/reearthly',
    icon: 'f',
    description: 'Like our Facebook page'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/reearthly',
    icon: '📷',
    description: 'Follow us on Instagram'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/reearthly',
    icon: 'in',
    description: 'Connect with us on LinkedIn'
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@reearthly',
    icon: '▶',
    description: 'Subscribe to our YouTube channel'
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
