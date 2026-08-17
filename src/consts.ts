// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Miao He (何淼) — Ontario Family Law Lawyer';
export const SITE_DESCRIPTION = 'Ontario & China dual-licensed family lawyer in Markham. Serving the Chinese-Canadian community in divorce, child custody, and cross-border assets. Mandarin & English. 647-930-6688.';
export const SITE_URL = 'https://www.miaohelaw.ca';
export const AUTHOR_NAME = 'Miao He (何淼)';
export const AUTHOR_TITLE = 'Barrister & Solicitor — Ontario & China';
export const AUTHOR_EMAIL = 'miao@miaohelaw.ca';

/** Personal GBP (Miao He Law → miaohelaw.ca). Not the H. LAW FIRM Maps listing. */
export const PERSONAL_GBP_NAME = 'Miao He Law';
export const PERSONAL_GBP_URL = 'https://www.google.com/search?q=Miao+He+Law&kgmid=/g/11nc1y4_8w';
export const PERSONAL_GBP_MAPS_URL =
	'https://www.google.com/maps/place/Miao+He+Law/@43.8149715,-79.3498119,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d33d713b3bc5:0xbfc8a82458104dfb!8m2!3d43.8149715!4d-79.3498119!16s%2Fg%2F11nc1y4_8w';
export const PERSONAL_GBP_MAP_EMBED_EN =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.6!2d-79.3498119!3d43.8149715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d33d713b3bc5%3A0xbfc8a82458104dfb!2sMiao+He+Law!5e0!3m2!1sen!2sca';
export const PERSONAL_GBP_MAP_EMBED_ZH =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.6!2d-79.3498119!3d43.8149715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d33d713b3bc5%3A0xbfc8a82458104dfb!2sMiao+He+Law!5e0!3m2!1szh-CN!2sca';

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

/** Calendar "today" in Toronto for listing stamps (FAQ/blog heroes); avoids UTC build servers showing the wrong local date. */
const torontoYmd = new Intl.DateTimeFormat('en-CA', {
	timeZone: SITE_LAST_UPDATED_TZ,
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
}).format(new Date());
const [tuY, tuM, tuD] = torontoYmd.split('-').map((s) => parseInt(s, 10));
const siteLastUpdatedBuildDate = new Date(Date.UTC(tuY, tuM - 1, tuD, 12, 0, 0));

export const SITE_LAST_UPDATED_ZH = formatSiteLastUpdatedZh(siteLastUpdatedBuildDate);
export const SITE_LAST_UPDATED_EN = formatSiteLastUpdatedEn(siteLastUpdatedBuildDate);
