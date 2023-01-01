export function isHTMLLink(link: unknown) {
  return typeof link === 'string' && link.startsWith('http');
}
