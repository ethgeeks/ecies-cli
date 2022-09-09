# About

Command line utility to encrypt / decrypt string messages with [ECIES](https://en.wikipedia.org/wiki/Integrated_Encryption_Scheme) (Ethereum-used cryptography scheme).

# Usage

## Get help

```bash
$ node src/main.js
Usage: ecies-cli [options] [command]

ECIES command line utility

Options:
  -V, --version                  output the version number
  -h, --help                     display help for command

Commands:
  decrypt <privateKey> <cipher>  decrypts a message encrypted by public key
  encrypt <publicKey> <message>  encrypts a message with public key
  create                         creates a private / public key pair
  help [command]                 display help for command
```

## Create a random private / public key pair

```bash
$ node src/main.js create
private key: 0xf2748b444d331a21ffc91559eafc192ec191a6b17b02100c238d1eea389a6e87
public key: 0x046227874b1f5eb8d9ab18dd934227f595b751bd145a0c93dd5124c1c8605f573e6551a5c1ee94c7b57c6de81a7c10d9e658cda771cd801f3ef6b7cdcf7de06985
```

## Encrypt with public key

```bash
$ node src/main.js encrypt 0x046227874b1f5eb8d9ab18dd934227f595b751bd145a0c93dd5124c1c8605f573e6551a5c1ee94c7b57c6de81a7c10d9e658cda771cd801f3ef6b7cdcf7de06985 Hello,World!
Cipher:
0x047b220b52414a9b39615af0594d5c4ca105723d8d8e384fd7f2e0367b224d7e6793a20b6b1524a8e9cbf9621bfcb1a85fb916ded67f967c033b6aaff1ad21896dc52b322bea743568929f8f82e21ecd86c547b6089ea27dd57d5cbc16a9b2ab195d1e62f1600cc3c2bd1f760d8c66b98b4065cdc73ab9ff9d3358136a
```

## Decrypt with private key:

```bash
$ node src/main.js decrypt 0xf2748b444d331a21ffc91559eafc192ec191a6b17b02100c238d1eea389a6e87 0x047b220b52414a9b39615af0594d5c4ca105723d8d8e384fd7f2e0367b224d7e6793a20b6b1524a8e9cbf9621bfcb1a85fb916ded67f967c033b6aaff1ad21896dc52b322bea743568929f8f82e21ecd86c547b6089ea27dd57d5cbc16a9b2ab195d1e62f1600cc3c2bd1f760d8c66b98b4065cdc73ab9ff9d3358136a
Message:
Hello,World!
```

## Precompiled binaries

**TBD**

## Windows

Download: [ecies-cli]()

## Linux

Download: [ecies-cli]()
