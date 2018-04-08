import React from 'react';
import { Deck, Heading, Slide, List, ListItem, Appear } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Landing from './slides/Landing';
import Ending from './slides/Ending';
import TemplateOne from './slides/TemplateOne';
import TemplateTwo from './slides/TemplateTwo';
import TemplateThree from './slides/TemplateThree';
import { HDKeyComponent, HDKeyComponent2 } from './components/mnemonic';
import styled from 'styled-components';
import HD from './assets/hd.png';

const BackgroundImage = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 700px;
  width: 1000px;
  background-image: url(${HD});
  background-size: cover;
`;

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#000',
    quarternary: '#fff',
  },
  {
    primary: 'Din',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        contentHeight={'100%'}
        contentWidth={'100%'}
      >
        <Slide>
          <Landing
            title={'What Is Cryptocurrency Wallet'}
            subTitle={'Cobo FE'}
          />
        </Slide>
        <Slide>
          <TemplateOne>
            <Heading size={3} lineHeight={1} textColor="secondary">
              Cryptocurrency wallet is a interface that helps you to view your
              address balance, and use your private key to sign information
              (transaction)
            </Heading>
            <div style={{ padding: '80px 100px' }}>
              <List>
                <Appear>
                  <ListItem>
                    Public Key (Address) - Monitor your account
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>Private Key - Sign your transaction</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Other Features - Dapp / Token / Signature</ListItem>
                </Appear>
              </List>
            </div>
            <Appear>
              <Heading size={3} lineHeight={1} textColor="secondary">
                But ...
              </Heading>
            </Appear>
            <Appear>
              <Heading size={3} lineHeight={1} textColor="secondary">
                These keys are not human friendly and hard to backup / remember
              </Heading>
            </Appear>
            <div style={{ padding: '80px 100px' }}>
              <List>
                <Appear>
                  <ListItem>
                    Bitcoin WIF -
                    Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>Ethereum Keystore / Private Key</ListItem>
                </Appear>
                <Appear>
                  <ListItem>WTF ...</ListItem>
                </Appear>
              </List>
            </div>
          </TemplateOne>
        </Slide>
        <Slide>
          <TemplateTwo title={'Hierarchical Deterministic Wallet'}>
            <div style={{ padding: '80px 100px' }}>
              <List>
                <Appear>
                  <ListItem>Introduced in BIP-32</ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Single Key for multiple accounts, even coins
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>Human friendly mnemonic</ListItem>
                </Appear>
              </List>
            </div>
            <BackgroundImage />
          </TemplateTwo>
        </Slide>
        <Slide>
          <TemplateThree title={'Mnemonic Deriver'}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <HDKeyComponent />
              <HDKeyComponent2 />
            </div>
          </TemplateThree>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Ending />
        </Slide>
      </Deck>
    );
  }
}
