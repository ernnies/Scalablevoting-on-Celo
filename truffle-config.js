module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*", // Match any network id
      },
    },
    compilers: {
      solc: {
        version: "^0.8.0", // Use the solc compiler version matching your contract's pragma solidity version
      },
    },
  };
  