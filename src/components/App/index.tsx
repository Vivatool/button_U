import Box from '@mui/material/Box';
import { useAppSelector } from '@uspacy/store';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IUserSettingsContext } from '../../context/UserSettings/types';
import Providers from '../../Providers';
import StartChatButton from '../StartChatButton';
import { useSettings } from '../context/UserSettings';

const App: React.FC = () => {
  const { t } = useTranslation();
  const profile = useAppSelector((state) => state.profile.data);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        color: (theme) => theme.palette.primary.main,
      }}
    >
      {t('helloWorld')} | {profile?.firstName} {profile?.lastName}
    </Box>
  );
};

const AppWrap: React.FC = () => {
  const settings = useSettings();
  const phoneNumber = '+380XXXXXXXXX';

  if (!settings) {
    return <div>Loading settings...</div>;
  }

  return (
    <Providers userSettings={settings}>
      <App />
      <div>
        <h1>Welcome to Uspacy Application</h1>
        <StartChatButton phoneNumber={phoneNumber} settings={settings} />
      </div>
    </Providers>
  );
};

export default AppWrap;
