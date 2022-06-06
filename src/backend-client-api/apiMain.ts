// Import the API, Keyring and some utility functions
const { ApiPromise } = require('@polkadot/api');
const { Keyring, KeyringPair } = require('@polkadot/keyring');
const { mnemonicGenerate } = require('@polkadot/util-crypto');

var api: InstanceType<typeof ApiPromise> //Global scope.

/**
 * Generate a Keypair(account) for the user and return the Public Key and mnemonic seed phrase.
 * User needs to save this seed phrase to recover this newly generated keypair.
 **/
export async function createKeypair(keyname: string, keyring: InstanceType<typeof Keyring>): Promise<string[]> {

  


  // generate a mnemonic with default params (we can pass the number
  // of words required 12, 15, 18, 21 or 24, less than 12 words, while
  // valid, is not supported since it is more-easily crackable)
  // const mnemonic = mnemonicGenerate(24);

  // // create & add the pair to the keyring with the type and some additional
  // // metadata specified
  // const pair = keyring.addFromUri(mnemonic, { name: keyname}, 'ed25519');

  // // the pair has been added to our keyring
  // console.log(keyring.pairs.length, 'pairs available');

  // // log the name & address (the latter encoded with the ss58Format)
  // console.log(pair.meta.name, 'has address', pair.address);
  // console.log(pair,'abc');
  // console.log(typeof(pair),'type of pair');
  const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const output = execSync('subkey generate', { encoding: 'utf-8' });  // the default is 'buffer'
// console.log('Output was:\n', output);
 const result = output.split("\n");
 const mnemonic = result[0].split(":")[1].trim();
//  console.log("Seed phrase:",mnemonic);
 const pubKey = result[5].split(":")[1].trim();
//  console.log("Public Key or Address:",pubKey);
  return [mnemonic,pubKey]; // OR pair.publicKey
  
}

// Sample output
//  Secret phrase:       alcohol head assault position goddess awake truth liquid client pretty bacon glare
//   Network ID:        substrate
//   Secret seed:       0x4b6315fc3d4b43d3ba772193f2cd16fd1a71c75795fb98a277886cb68a1d6050
//   Public key (hex):  0x9802e39f3e46a7ac725b94afd3d7e411072bd6aeacb90d489dd9e79dc9b6ef62
//   Account ID:        0x9802e39f3e46a7ac725b94afd3d7e411072bd6aeacb90d489dd9e79dc9b6ef62
//   Public key (SS58): 5FW1zbhtfh4jL2LnsEhn6zNBHiEyhYvqgt6boQf8EGoixjJb
//   SS58 Address:      5FW1zbhtfh4jL2LnsEhn6zNBHiEyhYvqgt6boQf8EGoixjJb
/**
 * Make a payment from a source keypair to a destination keypair.
 **/
export async function makePayment(fromKeypair: string, toKeypair: string, numNirvana: number): Promise<void> {
  
  // Create a extrinsic, transferring numNirvana units to 'toKeyPair'
  const transfer = api.tx.balances.transfer(toKeypair, numNirvana);

  // Sign and send the transaction using our account
  const hash = await transfer.signAndSend(fromKeypair);

  // console.log('Transfer sent with hash', hash.toHex());

}



/** Stub for main.
 *
 **/
async function main () {
  // Instantiate the API
  const api = await ApiPromise.create();
  // console.log("api",api);

  // Constuct the keyring after the API (crypto has an async init)
  const keyring = new Keyring({ type: 'sr25519' });

  // console.log("\n Generating random seedphrase and corresponding keypair...");

  const fromKey: string[] = [];
  const toKey: string[] = [];

  await createKeypair('John', keyring).catch((error: Error) => {
        throw new Error(error.message);
    })
    .then((outputs: string[]) => {
        fromKey.length = 0;
        return outputs.forEach((item, i) => {
          fromKey[i] = item;
        });
    });

  await createKeypair('Jane', keyring).catch((error: Error) => {
        throw new Error(error.message);
    })
    .then((outputs: string[]) => {
        toKey.length = 0;
        return outputs.forEach((item, i) => {
          toKey[i] = item;
        });
    });

  // Add Alice to our keyring with a hard-deived path // TBD - (empty phrase, so uses dev)
  //const alice = keyring.addFromUri('//Alice');
    
  // John makes a payment to Jane. 
  console.log(fromKey[1],typeof(fromKey[0]),'Fromkey','type:');
  console.log(toKey[1],typeof(toKey[0]),'tokey','type:');


  await makePayment(fromKey[0], toKey[0], 100);

}

main().catch(console.error).finally(() => process.exit());