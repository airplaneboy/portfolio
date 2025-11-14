const StructuredData = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sulaiman Agara',
    url: 'https://sulaimanagara.com',
    sameAs: ['https://github.com/airplaneboy'],
    jobTitle: 'Web Developer, Game Developer, Security Analyst',
    description:
      'Computer science student and developer based in Philadelphia specializing in web and game development (React, Next.js, TypeScript, Node.js, C# / Unity) and security analysis.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Philadelphia',
      addressRegion: 'PA',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Web Development',
      'Game Development',
      '3D Animation',
      'Cybersecurity',
      'TypeScript',
      'React',
      'Node.js',
      'Unity',
    ],
  } as const;

  return (
    // JSON-LD in body is acceptable for crawlers; placed early in the document
    <script
      type='application/ld+json'
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
