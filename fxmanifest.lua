fx_version "cerulean"
version '1.0.0'
name "ps-core-rdr3"
description "ps-core-rdr3"
author "Rory Pearson (Mezmerizxd)"
url "https://github.com/Project-Sicario/ps-core-rdr3"

lua54 'yes'
game "rdr3"

client_scripts {
    'scripts/client/*.client.js',
    'lua/client/*.lua',
}
server_scripts {
    'scripts/server/*.server.js',
    'lua/server/*.lua',
}

rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'
