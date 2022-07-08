import {NewPlayerData} from "../types/player-manager-types";

class PlayerManager {
    protected static instance: PlayerManager;
  
    public static getInstance(): PlayerManager {
      if (!PlayerManager.instance) {
        PlayerManager.instance = new PlayerManager();
      }
      return PlayerManager.instance;
    }
  
    public Login(source, license) {
        if (source !== null && license !== null) {
            global.exports.oxmysql.fetch("SELECT * FROM players WHERE license = ?", [license], (response: any) => {
                const result = response[0];
                if (result) {
                    return {loginSuccessful: true}
                }else {
                    return {loginSuccessful: false}
                }
            }).then((response: any) => {
                return response;
            });
        }
    }

    public CreateNewPlayer(source) {
        if (source !== null) {
            const license = GetPlayerIdentifier(source, 1);
            const steamdId = GetPlayerIdentifier(source, 0);

            // Create some basic data for the player
            global.exports.oxmysql.fetch("SELECT * FROM players WHERE license = ?", [license], (response: any) => {
                const result = response[0];
                if (result) {
                    this.Login(source, license);
                }else {
                    // Create the CitizenId
                    global.exports.oxmysql.fetch("SELECT * FROM players", [], (response: any) => {
                        let citizenId;
                        if (response.length > 0) {
                            citizenId = response.length + 1;
                        }else {
                            citizenId = 1;
                        }
                        // Push the data to the database
                        global.exports.oxmysql.insert("INSERT INTO players (steamId, license, citizenId) VALUES (?, ?, ?)", [steamdId, license, citizenId]);
                    }).then((response: any) => {
                        return response;
                    });
                }
            }).then((response: any) => {
                return response;
            });
        }
    }

  }
  
  export default PlayerManager;
  