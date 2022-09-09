
const {Command} = require('commander');
const ecies = require('ecies-geth');
const chalk = require('chalk');
const { Wallet, utils: {arrayify, hexlify}} = require('ethers');

const program = new Command();

async function decryptMessage(privateKey, cipher) {
  const w = new Wallet(privateKey);
  const bufferJson = await ecies.decrypt(arrayify(w.privateKey), arrayify(cipher));
  return bufferJson.toString();
}

async function encryptMessage(publicKey, message) {
  const cipher = await ecies.encrypt(arrayify(publicKey), message);
  return hexlify(cipher);
}

program
  .name('ecies-cli')
  .description('ECIES command line utility')
  .version('1.0')
  
program
  .command('decrypt')
  .description('decrypts a message encrypted by public key')
  .argument('<privateKey>', 'Private key for decryption')
  .argument('<cipher>', 'hex string of cipher')
  .action(async (privateKey, cipher) => {
    const message = await decryptMessage(privateKey, cipher);
    console.log(`Message:\n${chalk.bold(message)}`);
  });

program
  .command('encrypt')
  .description('encrypts a message with public key')
  .argument('<publicKey>', 'public key as hex string')
  .argument('<message>', 'message to encrypt')
  .action(async (publicKey, message) => {
    const cipher = await encryptMessage(publicKey, message);
    console.log(`Cipher:\n${chalk.bold(cipher)}`);
  });

program
  .command('create')
  .description('creates a private / public key pair')
  .action(()=>{
    const w = new Wallet.createRandom();
    console.log(`private key: ${chalk.bold(w.privateKey)}`);
    console.log(`public key: ${chalk.bold(w.publicKey)}`);
  });

async function main() {
  await program.parseAsync(process.argv);
}

main();