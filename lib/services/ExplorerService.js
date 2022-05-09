class ExplorerService{

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const numExplorersByMission = explorers.filter((explorer) => explorer.mission == mission)
        return numExplorersByMission.length
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const getUsernamesExplorers = explorers.filter((explorer) => explorer.mission == mission)
        const usernamesInMission = getUsernamesExplorers.map((explorer) => explorer.githubUsername)
        return usernamesInMission
    }

}

module.exports = ExplorerService

