import { ITSettingsState } from '../slices/settings';

export const langSelector = (state: { settings: ITSettingsState }) =>
  state.settings.lang;
