const fs = require('fs');
   
/*
** The latest version of ipfs-http-client is ESM-only. Hence we need
** to use the dynamic import function to load ipfs-http-client at runtime 
** from a CJS module.
** Ref: https://github.com/ipfs/js-ipfs/blob/master/docs/upgrading/v0.62-v0.63.md#esm
*/
async function loadIpfsHttpClient() {
  const { create } = await import('ipfs-http-client')

  const client = await create({
	url: 'https://ipfs.infura.io:5001/api/v0'
  })

  return client
}

async function loadItemToIpfs(client, file) {
  try {
      const created = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      //setUrlArr(prev => [...prev, url]);      
      console.log("IPFS URL Path: ", url);
    } catch (error) {
      console.log(error.message);
  }
}

/** Stub for main.
 *
 **/
async function main () {
  const sampleItem = {
        "ID": "123",
        "itemName": "Camera",
        "sellerName": "Bob",
        "sellerPublicKey": "abc",
        "imgURL": "http://file:img1.png",
        "prodVid": "http://file:video1.mpg",
        "itemPrice": 100,
        "itemCondition": "New"
   };

  const sampleItemStr = JSON.stringify(sampleItem);
  const itemBuffer = Buffer.from(sampleItemStr)

  const ipfsClientInst = await loadIpfsHttpClient();
  //console.log(ipfsClientInst);
  
  await loadItemToIpfs(ipfsClientInst, itemBuffer);
}

main().catch(console.error).finally(() => process.exit());

