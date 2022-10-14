export type FooterLink = {
  text: string;
  href: string;
};

export type FooterSection = {
  heading: string;
  links: FooterLink[];
};

export type SiteMetadata = {
  title: string;
  subtitle?: string;
  description: string;
  permalink: string;
};

export type TracksResponse = {
  name: string;
  artist: string;
  href: string;
  album: string;
  image: {
    height?: number | undefined;
    url: string;
    width?: number | undefined;
  };
};
