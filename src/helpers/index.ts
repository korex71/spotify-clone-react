export const secondsToMinutes = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formatedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${minutes}:${formatedSeconds}`;
};

export const checkIsOnline = (): boolean => navigator.onLine;
