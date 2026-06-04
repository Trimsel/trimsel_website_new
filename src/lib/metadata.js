const BASE_URL = 'https://www.trimsel.com';

const DEFAULT_OG_IMAGE = {
  url: `${BASE_URL}/images/myherocloud.png`,
  width: 1200,
  height: 630,
  alt: 'Trimsel - Software Development Company in Chennai',
};

export function buildMetadata({ title, description, path, ogImage }) {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      locale: 'en_IN',
      siteName: 'Trimsel',
      images: [ogImage || DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@TrimselSoftwares',
      creator: '@TrimselSoftwares',
    },
  };
}
