import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ar', 'en', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'lt', 'pt', 'ru', 'sa', 'tr', 'zh'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en|es|fr|hi|id|it|ja|lt|pt|ru|sa|tr|zh)/:path*']
};