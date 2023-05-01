// Store
import { useAppSelector } from './useStore';
import { langSelector } from '@/store/selectors/settings';

// Data
import langContent from '@/data/langContent';
import { LANGS } from '@/data/constants';

type TLangContent = typeof langContent.EN;

type TUseLangContent = <T extends keyof TLangContent>(
  // eslint-disable-next-line no-unused-vars
  item: T
) => TLangContent[T];

const useLangContent: TUseLangContent = (item) => {
  const lang = useAppSelector(langSelector);

  if (lang === LANGS.EN) {
    return langContent.EN[item];
  }

  return langContent.UA[item];
};

export default useLangContent;
