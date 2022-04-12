import React from 'react';

// ======= component import -->
import { Container, Tag, Title, Desc } from './Collector.component';

const Collector = () => {
  return (
    <Container>
      {/* ====== tag */}
      <Tag>Get Actionable Insights</Tag>
      {/* ====== title */}
      <Title>How it works</Title>
      {/* ====== desc */}
      <Desc>
        Find out everything you need to know for planning your business
        processes. Monitor projects remotely.
      </Desc>

      {/* ====== step cards */}
    </Container>
  );
};

export default Collector;
