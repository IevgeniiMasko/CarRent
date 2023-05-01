import React from 'react';

// Store
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { langSelector } from '@/store/selectors/settings';
import { setLang } from '@/store/slices/settings';

// data
import langContent from '@/data/langContent';

const LangSwitcher = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector(langSelector);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    dispatch(setLang({ lang: e.target.value }));
  };

  return (
    <select value={lang} onChange={handleLangChange}>
      <option value="UA">{langContent.UA.name.short}</option>
      <option value="EN">{langContent.EN.name.short}</option>
    </select>
  );
};

export default LangSwitcher;
