import axios from 'axios';
import React from 'react';

import { ISettings } from '../models/settings';

interface StartChatButtonProps {
	phoneNumber: string;
	settings: ISettings;
}

const StartChatButton: React.FC<StartChatButtonProps> = ({ phoneNumber, settings }) => {
	const handleStartChat = async () => {
		try {
			await axios.post(
				'https://berrysync-cs-us-tg-production.up.railway.app/api/start-chat',
				{
					client_id: settings.client_id,
					phone_number: phoneNumber,
					message: settings.default_message,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
				},
			);
		} catch (error) {
			alert('Error starting chat');
		}
	};

	return <button onClick={handleStartChat}>Start chat</button>;
};

export default StartChatButton;
