export function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return (callback:Function) => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}

export function simulateLoginAttempt() {
  const delay = 2500;
  return (callback:Function) => {
    setTimeout(() => {
      callback({ success: true, token: 'exampleToken!@#123' });
    }, delay);
  };
}
