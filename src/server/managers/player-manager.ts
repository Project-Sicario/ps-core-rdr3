class PlayerManager {
    protected static instance: PlayerManager;

    public static getInstance(): PlayerManager {
        if (!PlayerManager.instance) {
            PlayerManager.instance = new PlayerManager();
        }
        return PlayerManager.instance;
    }


    private Players = [];
    private Player = {};

    constructor() {
        (async() => {
            this.Players = this.Players;
            this.Player = this.Player;
            return this;
        })
    }

    public AddPlayer(name: string) {
        const newPlayer = {
            name: `Player ${name}`,
            kills: 0,
            deaths: 0,
            moreData: {
                moreData: "moreData"
            }
        }
        this.Players.push(newPlayer);
    }

    public GetPlayers() {
        return this.Players;
    }
}

export default PlayerManager;