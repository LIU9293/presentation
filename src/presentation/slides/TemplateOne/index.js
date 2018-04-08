import React from 'react';
import styled from 'styled-components';

const LandingContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, #a700ff, #0003ff);
  padding: 10px;
`;

const InnerContainer = styled.div`
  background: #fff;
  display: flex;
  flex: 1;
  height: 100%;
  padding: 100px;
  flex-direction: column;
  align-items: center;
`;

export default class TemplateOne extends React.PureComponent {
  render() {
    return (
      <LandingContainer>
        <InnerContainer>{this.props.children}</InnerContainer>
      </LandingContainer>
    );
  }
}
