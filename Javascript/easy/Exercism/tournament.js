export const tournamentTally = (text) => {
    let results = 'Team                           | MP |  W |  D |  L |  P';
    if(text.length === 0) return results; 
  
    const teams = text.split('\n');
  
    console.log(teams);
  
    return results;
};