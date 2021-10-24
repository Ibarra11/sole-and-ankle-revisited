import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <UpToTabletWrapper>
            <FlexContainer>
            <MobileToTabletTitle>Running</MobileToTabletTitle>
             <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
      
        </Breadcrumbs>
        </FlexContainer>
          </UpToTabletWrapper>
          
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

`;

const LeftColumn = styled.div`
  flex-basis: 248px;
    @media ${p => p.theme.tablets}{
    display: none;
  }

`;

const MainColumn = styled.div`
  flex: 1;
`;



const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media ${p => p.theme.tablets}{
   align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  @media ${p => p.theme.tablets}{
    display: none;
  }
`;

const MobileToTabletTitle = styled(Title)`
  display: revert;
`;

const UpToTabletWrapper = styled.div`
  display: none;
  @media ${p => p.theme.tablets}{
    display: block;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

export default ShoeIndex;
