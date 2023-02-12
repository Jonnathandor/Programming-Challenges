export const tournamentTally = (text) => {
  let format = 'Team                           | MP |  W |  D |  L |  P'; 
  if (text === '') {
    return format;
  }

  const lines = text.split('\n');
  const tally = computeTally(lines);

  // Convert the tally object to an array of objects so that we can sort it
  const sortedTeams = [];
  for (const team in tally) {
    sortedTeams.push({ team, ...tally[team] });
  }
  
  // Sort the array of objects based on the number of points, then the number of wins,
  // then the name of the team (in alphabetical order)
  sortedTeams.sort((a, b) => {
    if (b.P !== a.P) {
      return b.P - a.P;
    }
    if (b.W !== a.W) {
      return b.W - a.W;
    }
    return a.team.localeCompare(b.team);
  });

  for (const { team, MP, W, D, L, P } of sortedTeams) {
    format += `\n${team.padEnd(31)}|${[MP, W, D, L, P].map(val => val.toString().padStart(3)).join(' |')}`;
  }
  return format;
};

const computeTally = (lines) => {
  const tally = {};
  for (const line of lines) {
    const [team1, team2, result] = line.split(';');
    if (!tally[team1]) {
      tally[team1] = { MP: 0, W: 0, D: 0, L: 0, P: 0 };
    }
    if (!tally[team2]) {
      tally[team2] = { MP: 0, W: 0, D: 0, L: 0, P: 0 };
    }

    tally[team1].MP++;
    tally[team2].MP++;
    if (result === 'win') {
      tally[team1].W++;
      tally[team1].P += 3;
      tally[team2].L++;
    } else if (result === 'loss') {
      tally[team1].L++;
      tally[team2].W++;
      tally[team2].P += 3;
    } else {
      tally[team1].D++;
      tally[team1].P++;
      tally[team2].D++;
      tally[team2].P++;
    }
  }
  return tally;
}
