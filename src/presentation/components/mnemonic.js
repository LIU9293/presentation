import React from 'react';
import HDKey from 'hdkey';
import bip39 from 'bip39';
import EtherWallet from 'ethereumjs-wallet';
import styled from 'styled-components';
import { Input, Button } from 'antd';
// soup spider glow goddess knock rally cluster leaf seven foster panda focus
// m/44'/60'/0'/0/0

const HDKeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 30px;
  border-radius: 5px;
  width: 800px;
`;

export class HDKeyComponent extends React.Component {
  state = {
    path: '',
    mnemonic: '',
    seed: '',
    privKey: '',
    pubKey: '',
    address: '',
    xpriv: '',
    xpub: '',
  };

  onMnemonicChange = e => {
    e.preventDefault();
    this.setState({ mnemonic: e.target.value });
  };

  onPathChange = e => {
    e.preventDefault();
    this.setState({ path: e.target.value });
  };

  onCalculate = () => {
    const seed = bip39.mnemonicToSeedHex(this.state.mnemonic);
    const hdkey = HDKey.fromMasterSeed(new Buffer(seed, 'hex')).derive(
      this.state.path
    );
    window.hdkey = hdkey;
    this.setState({
      privKey: hdkey.privateKey,
      pubKey: hdkey.publicKey,
      xpriv: hdkey.privateExtendedKey,
      xpub: hdkey.publicExtendedKey,
    });
  };

  getAddress = coin => {
    let address = '';
    if (coin === 'ETH') {
      const instance = EtherWallet.fromExtendedPublicKey(this.state.xpub);
      address = '0x' + instance.getAddress().toString('hex');
    }
    this.setState({ address });
  };

  render() {
    return (
      <HDKeyContainer>
        <Input
          addonBefore="Mnemonic"
          placeholder={'xxxx xxxx xxxx ...'}
          value={this.state.mnemonic}
          onChange={this.onMnemonicChange}
        />
        <Input
          style={{ margin: '20px 0' }}
          addonBefore="Derive Path"
          placeholder={'m/44/...'}
          value={this.state.path}
          onChange={this.onPathChange}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button onClick={this.onCalculate}>Generate Keys</Button>
          <Button
            style={{ margin: '0 10px' }}
            onClick={() => this.getAddress('BTC')}
          >
            Get BTC Address
          </Button>
          <Button onClick={() => this.getAddress('ETH')}>
            Get ETH Address
          </Button>
        </div>
        <div style={{ marginTop: '20px' }}>
          Private Key: {this.state.privKey.toString('hex')}
        </div>
        <div>Public Key: {this.state.pubKey.toString('hex')}</div>
        <div>Address: {this.state.address}</div>
      </HDKeyContainer>
    );
  }
}

export class HDKeyComponent2 extends React.Component {
  state = {
    path1: '',
    path2: '',
    mnemonic: '',
    seed: '',
    privKey: '',
    pubKey: '',
    address: '',
    xpriv: '',
    xpub: '',
  };

  onMnemonicChange = e => {
    e.preventDefault();
    this.setState({ mnemonic: e.target.value });
  };

  onPathChange = (e, index) => {
    e.preventDefault();
    if (index === 1) {
      this.setState({ path1: e.target.value });
    }
    if (index === 2) {
      this.setState({ path2: e.target.value });
    }
  };

  onCalculate = () => {
    const seed = bip39.mnemonicToSeedHex(this.state.mnemonic);
    const hdkey = HDKey.fromMasterSeed(new Buffer(seed, 'hex'))
      .derive(this.state.path1)
      .derive(this.state.path2);
    this.setState({
      privKey: hdkey.privateKey,
      pubKey: hdkey.publicKey,
      xpriv: hdkey.privateExtendedKey,
      xpub: hdkey.publicExtendedKey,
    });
  };

  getAddress = coin => {
    let address = '';
    if (coin === 'ETH') {
      const instance = EtherWallet.fromExtendedPublicKey(this.state.xpub);
      address = '0x' + instance.getAddress().toString('hex');
    }
    this.setState({ address });
  };

  render() {
    return (
      <HDKeyContainer>
        <Input
          addonBefore="Mnemonic"
          placeholder={'xxxx xxxx xxxx ...'}
          value={this.state.mnemonic}
          onChange={this.onMnemonicChange}
        />
        <Input
          style={{ margin: '20px 0' }}
          addonBefore="Derive Path"
          placeholder={'m/44/...'}
          value={this.state.path1}
          onChange={e => this.onPathChange(e, 1)}
        />
        <Input
          style={{ margin: '0 0 20px 0' }}
          addonBefore="Derive Path 2"
          placeholder={'m/44/...'}
          value={this.state.path2}
          onChange={e => this.onPathChange(e, 2)}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button onClick={this.onCalculate}>Generate Keys</Button>
          <Button
            style={{ margin: '0 10px' }}
            onClick={() => this.getAddress('BTC')}
          >
            Get BTC Address
          </Button>
          <Button onClick={() => this.getAddress('ETH')}>
            Get ETH Address
          </Button>
        </div>

        <div style={{ marginTop: '20px' }}>
          Private Key: {this.state.privKey.toString('hex')}
        </div>
        <div>Public Key: {this.state.pubKey.toString('hex')}</div>
        <div>Address: {this.state.address}</div>
      </HDKeyContainer>
    );
  }
}
