const BASE_URL = 'https://meadows-oil-gas-redesign.vercel.app'

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, path }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      ...(path ? { item: `${BASE_URL}${path}` } : {}),
    })),
  }
}
