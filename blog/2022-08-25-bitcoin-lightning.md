---
slug: bitcoin-lightning
title: Bitcoin Lightning
authors: jay
tags: [bitcoin, lightning, layer-2]
---

![Bitcoin mountain wallpaper](../blog/img/bitcoin/blog-imgs_bitcoin.png)

<!-- truncate -->

## Bitcoin

Bitcoin is the most facinating technology to emerge in the 21st century so far. It's origin story is compelling, mysterious, and inspiring. The fact that the creator, Satoshi Nakamoto, left giving humanity a gift, a tool, a fightiing change and ultimately, hope makes it noteworthy of deep reflection and focus.

I started as an alt-coiner but after learning more about blockchain technology and following the community to a certain degree, it felt like all roads led to Bitcoin. I find it rather strange that some people have moved on already, calling it old technology and why would anyone invest in it when it has no utility? There is clearly some misunderstanding and ego involved here. There is an entire industry evolving around Bitcoin, primarily the Lightning Network.

Perhaps the most facinating thing about Bitcoin, and one which I'm not sure if I fully grasp the implications, is the fixed supply. Recently there have been several reports in the news about an African nation announcing a gold deposit worth trillions and how Nasa wants to explore an asteroid that has quintillions worth of gold in its core. So essentially, we don't know how much Gold there is and those in power can exploit that fact easily. The difference with Bitcoin is, we do know what the supply is: 21,000,000. My gut feeling is that Bitcoin will end up being worth an incredible amount of money, and that Satoshi Nakamoto might become the richest human who ever lived or will live (which if the keys are lost, remain untouched).

> Lost coins only make everyone else's coins worth slightly more. Think of it as a donation to everyone.

This completely selfless act shows that good engineering and software can become a global platform for trade and economic freedom. Being permissionless and open source, I believe that Bitcoin has ensured its longevity and continued adoption.

## Lightning Network

The Lightning Network is a layer 2 implementation on top of the Bitcoin blockchain to help it scale. Without this solution, Bitcoin could never really become a world currency since billions of people have mobile phones and the potential to connect to the internet.

From the [whitepaper](https://lightning.network/lightning-network-paper.pdf)

> A decentralized system is proposed whereby transactions are sent over
> a network of micropayment channels (a.k.a. payment channels or
> transaction channels) whose transfer of value occurs off-blockchain.

Mobile wallets will be the main medium of interacting and transacting with the Bitcoin blockchain. My plans for lightning is to use the LNURL-AUTH for authenticating users without a web2 loging such as Google, Facebook, or Linkedin. In my opinion, for a web3 project, there should be a stronger focus on the newer system so that adoption is greater and there is less friction. If the underlying protocol _just works_ then it is better for our financial and psychological health.

[See article](https://telegra.ph/lnurl-a-protocol-for-seamless-interaction-between-services-and-Lightning-wallets-08-19)

> lnurl is a protocol for communication between Lightning wallets and third-party services. It simplifies complicated common flows into standard subprotocols carried on between the user wallet and the service over simple HTTP JSON calls, leveraging the fact that the third-party services have the luxury of offering an https:// endpoint the user wallet can freely call.

### How it works

> 1. The wallet reads a QR code;
> 2. If it has the lnurl prefix it is decoded and the the resulting URL is called;
> 3. From the server response for that URL the wallet knows what subprotocol it should proceed with;
> 4. In the case of lnurl-withdraw, for example, the server response will contain some parameters (min/max, default description) for the invoice that will be generated in the user wallet;
> 5. The wallet proceeds with the subprotocol. In the case of lnurl-withdraw, for example, it will display an invoice generation window prefilled with the parameters returned by the server, and, upon confirmation by the user, send the invoice back to the server, which will pay it.

### LNURL-AUTH

### Passport

[PassportJS official site](https://www.passportjs.org/packages/passport-lnurl-auth/)

### LND

### LSAT

### Macaroons

### BOLTWALL

### Resources

- [Whitepaper](https://lightning.network/lightning-network-paper.pdf)
- [Lightning Labs](https://lightning.engineering/)
- [Jameson Lopp](https://www.lopp.net/lightning-information.html)
- [Umbrel](https://getumbrel.com/)
- [Arcane](https://arcane.no/research)
- [Bitcoin Developer Guide](https://developer.bitcoin.org/devguide/)
- [Lightning Engineering](https://docs.lightning.engineering/)

## Wallets

The following wallets use the Lightning Network:

- [Phoenix](https://phoenix.acinq.co/)
- [Muun](https://muun.com/)
- [Strike](https://strike.me/en/)
- [Blue Wallet](https://bluewallet.io/)
- [Zeus](https://zeusln.app/)
