class GameManager {
  protected static instance: GameManager;

  public static getInstance(): GameManager {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  private Players = [];

  constructor() {
    async () => {
      this.Players = this.Players;
      return this;
    };
  }

  public start() {
    console.log("Game Manager Started.")
  }

  public update() {}

  public stop() {}

  public GetPlayers() {
    return this.Players;
  }
}

export default GameManager;
