// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Miao He (何淼) — Ontario Family Law Lawyer';
export const SITE_DESCRIPTION = 'Ontario & China dual-licensed family lawyer in Markham. Serving the Chinese-Canadian community in divorce, child custody, and cross-border assets. Mandarin & English. 647-930-6688.';
export const SITE_URL = 'https://www.miaohelaw.ca';
export const AUTHOR_NAME = 'Miao He (何淼)';
export const AUTHOR_TITLE = 'Barrister & Solicitor — Ontario & China';
export const AUTHOR_EMAIL = 'miao@miaohelaw.ca';

const SITE_LAST_UPDATED_TZ = 'America/Toronto';

function formatSiteLastUpdatedZh(date: Date): string {
	return new Intl.DateTimeFormat('zh-CN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: SITE_LAST_UPDATED_TZ,
	}).format(date);
}

function formatSiteLastUpdatedEn(date: Date): string {
	return new Intl.DateTimeFormat('en-CA', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: SITE_LAST_UPDATED_TZ,
	}).format(date);
}

/** Set once per static build (deploy); FAQ / blog heroes and other stamps stay in sync without manual edits. */
const siteLastUpdatedBuildDate = new Date();

export const SITE_LAST_UPDATED_ZH = formatSiteLastUpdatedZh(siteLastUpdatedBuildDate);
export const SITE_LAST_UPDATED_EN = formatSiteLastUpdatedEn(siteLastUpdatedBuildDate);
