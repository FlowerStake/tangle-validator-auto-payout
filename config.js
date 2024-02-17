module.exports = {
  nodeWS: 'wss://testnet-rpc.tangle.tools',
  denom: 'tTNT',
  decimalPlaces: 18,
  validator: 'VALIDATOR_STASH_ADDRESS', //THE VALIDATOR ADDRESS YOU ARE CLAIMING REWARDS
  password: 'KEYSTORE_PASSWORD', //THE PASSWORD OF THE KEYSTORE ACCOUNT
  accountJSON: './keystores/exported_account.json', //JSON ACCOUNT FILE EXPORTED FROM PolkadotJS Extension
  log: true,
}
