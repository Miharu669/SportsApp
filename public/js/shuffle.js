
const teams = [
    "Turbo Titans", "Aerial Aces", "Boost Brigade", "Nitro Ninjas", "Velocity Vortex", "Sonic Strikers", "Gravity Gladiators",
    "Supersonic Smashers", "Skyward Sentinels", "Phantom Flyers", "Hyperdrive Heroes",
    "Radiant Rockets", "Maverick Masters", "Cyclone Champions", "Galactic Guardians",
    "Thunder Demons", "Blaze Breakers", "Solar Sentries",
    "Nebula Navigators", "Quantum Quicksilvers", "Inferno Igniters", "Eclipse Eliminators", "Fusion Flyers", "Stellar Strikers",
    "Meteor Mavericks", "Proton Pilots", "Drift Dominators", "Apex Avengers"
];


function drawTeams(teamsArray, numberOfTeams) {
    let shuffledTeams = teamsArray.sort(() => Math.random() - 0.5); 
    return shuffledTeams.slice(0, numberOfTeams);
}


let selectedTeams = drawTeams(teams, 16);


console.log("Equipos seleccionados para el sorteo:");
selectedTeams.forEach((team, index) => {
    console.log(`${index + 1}. ${team}`);
});