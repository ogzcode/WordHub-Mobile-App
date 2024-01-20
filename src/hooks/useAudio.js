import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

const useAudio = (audioUri) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: audioUri });
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Ses çalma hatası:', error);
    }
  };

  return { playSound };
};

export default useAudio;
