// Import the API, Keyring and some utility functions
const { ApiPromise } = require('@polkadot/api');
const { Keyring, KeyringPair } = require('@polkadot/keyring');

var api: InstanceType<typeof ApiPromise> //Global scope.

/**
 * Generate a Keypair(account) for the user and return the Public Key and mnemonic seed phrase.
 * User needs to save this seed phrase to recover this newly generated keypair.
 **/
export async function createKeypair(keyname: string, keyring: InstanceType<typeof Keyring>): Promise<object[]> {

  const { mnemonicGenerate } = require('@polkadot/util-crypto');

  // generate a mnemonic with default params (we can pass the number
  // of words required 12, 15, 18, 21 or 24, less than 12 words, while
  // valid, is not supported since it is more-easily crackable)
  const mnemonic = mnemonicGenerate(24);

  // create & add the pair to the keyring with the type and some additional
  // metadata specified
  const pair = keyring.addFromUri(mnemonic, { keyname: keyname}, 'ed25519');

  // the pair has been added to our keyring
  console.log(keyring.pairs.length, 'pairs available');

  // log the name & address (the latter encoded with the ss58Format)
  console.log(pair.meta.name, 'has address', pair.address);

  return [pair, mnemonic]; // OR pair.publicKey

}

/**
 * Make a payment from a source keypair to a destination keypair.
 **/
export async function makePayment(fromKeypair: InstanceType<typeof KeyringPair>, toKeypair: InstanceType<typeof KeyringPair>, numNirvana: number): Promise<void> {
  
  // Create a extrinsic, transferring numNirvana units to 'toKeyPair'
  const transfer = api.tx.balances.transfer(toKeypair, numNirvana);

  // Sign and send the transaction using our account
  const hash = await transfer.signAndSend(fromKeypair);

  console.log('Transfer sent with hash', hash.toHex());

}

/** Stub for main.
 *
 **/
async function main () {
  // Instantiate the API
  const api = await ApiPromise.create();

  // Constuct the keyring after the API (crypto has an async init)
  const keyring = new Keyring({ type: 'sr25519' });

  console.log("\nGenerating random seedphrase and corresponding keypair...");

  const fromKey: object[] = [];
  const toKey: object[] = [];

  await createKeypair('John', keyring).catch((error: Error) => {
        throw new Error(error.message);
    })
    .then((outputs: object[]) => {
        fromKey.length = 0;
        return outputs.forEach((item, i) => {
          fromKey[i] = item;
        });
    });

  await createKeypair('Jane', keyring).catch((error: Error) => {
        throw new Error(error.message);
    })
    .then((outputs: object[]) => {
        toKey.length = 0;
        return outputs.forEach((item, i) => {
          toKey[i] = item;
        });
    });

  // Add Alice to our keyring with a hard-deived path // TBD - (empty phrase, so uses dev)
  //const alice = keyring.addFromUri('//Alice');
    
  // John makes a payment to Jane. 
  await makePayment(fromKey[0], toKey[0], 100);

}

main().catch(console.error).finally(() => process.exit());

