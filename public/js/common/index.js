class Solve {
  static formatTime = (rawTime) => {
    const seconds = rawTime / 1000;

    if (seconds >= 60) {
      const minutes = Math.trunc(seconds / 60); // https://www.worldcubeassociation.org/regulations/#9f1

      const remainingSeconds = (seconds % 60)
        .toFixed(2) // 1.234 => 1.23
        .padStart(5, '0'); // 1:2.34 => 1:02.34

      return `${minutes}:${remainingSeconds}`;
    }

    return seconds.toFixed(2);
  };

  constructor(rawTime) {
    this.originalRawTime = rawTime;
    this.rawTimeWithPenalties = rawTime;
    this.formattedTime = Solve.formatTime(rawTime);
  }

  changePenalty(penalty) {
    switch (penalty) {
      case null:
        this.rawTimeWithPenalties = this.originalRawTime;
        this.formattedTime = Solve.formatTime(this.originalRawTime);
        break;
      case '+2':
        this.rawTimeWithPenalties = this.originalRawTime + 2000;
        this.formattedTime = Solve.formatTime(this.rawTimeWithPenalties);
        break;
      case 'DNF':
        this.rawTimeWithPenalties = Infinity;
        this.formattedTime = 'DNF';
        break;
    }
  }
}

export { Solve };
