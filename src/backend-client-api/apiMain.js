import React, { useReducer, useContext, useEffect } from 'react';
import { ApiPromise} from '@polkadot/api';
import { keyring as Keyring, KeyringPair } from '@polkadot/ui-keyring';
import { mnemonicGenerate } from '@polkadot/util-crypto';


export async function createKeypair(keyname, keyring) {
    // generate a mnemonic with default params (we can pass the number
    const mnemonic = mnemonicGenerate(24);

    // create & add the pair to the keyring with the type and some additional
    // metadata specified
    const pair = keyring.addFromUri(mnemonic, { keyname: keyname }, 'ed25519');

    // the pair has been added to our keyring
    console.log(keyring.pairs.length, 'pairs available');

    // log the name & address (the latter encoded with the ss58Format)
    console.log(pair.meta.name, 'has address', pair.address);

    return [pair, mnemonic]; // OR pair.publicKey
    
}
///
// Connecting to the Substrate node
const connect = (state, dispatch) => {
    const _api = new ApiPromise({ provider, rpc: jsonrpc });

}

async function backendClientApi() {
    // Instantiate the API
    //const api = await ApiPromise.create();

    // Constuct the keyring after the API (crypto has an async init)
    const keyring = new Keyring({ type: 'sr25519' });

    console.log("\nGenerating random seedphrase and corresponding keypair...");

    const fromKey = [];
    const toKey = [];

    await createKeypair('John', keyring).catch((error) => {
        throw new Error(error.message);
    })
        .then((outputs) => {
            fromKey.length = 0;
            return outputs.forEach((item, i) => {
                fromKey[i] = item;
            });
        });

    await createKeypair('Jane', keyring).catch((error) => {
        throw new Error(error.message);
    })
        .then((outputs) => {
            toKey.length = 0;
            return outputs.forEach((item, i) => {
                toKey[i] = item;
            });
        });

    // Add Alice to our keyring with a hard-deived path // TBD - (empty phrase, so uses dev)
    //const alice = keyring.addFromUri('//Alice');
}


export default backendClientApi;