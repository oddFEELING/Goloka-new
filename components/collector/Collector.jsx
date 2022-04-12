import React from 'react';
import IconBox from '../lib/icon_box/IconBox.component';

// ======= component import -->
import { Container, Tag, Title, Desc, StepArea } from './Collector.component';

const Collector = React.memo(() => {
  const IconBoxData = [
    {
      icon: `lucide:mouse-pointer-click`,
      title: `Sign Up`,
      desc: `Take a few minutes to sign up. It's totally free!`,
    },
    {
      icon: `ion:create-outline`,
      title: `Create a Task`,
      desc: `Create a task with detailed instructions.`,
    },
    {
      icon: `akar-icons:circle-check`,
      title: `Accept Completed Tasks`,
      desc: `Review and accept completed tasks.`,
    },
    {
      icon: `bi:cash-coin`,
      title: `Payout`,
      desc: `Authorize payments for accepted tasks.`,
    },
  ];
  return (
    <Container>
      {/* ====== tag */}
      <Tag data-aos='fade-right'>Get Actionable Insights</Tag>
      {/* ====== title */}
      <Title data-aos='fade-right' data-aos-delay='150'>
        How it works
      </Title>
      {/* ====== desc */}
      <Desc data-aos='fade-right' data-aos-delay='300'>
        Find out everything you need to know for planning your business
        processes. Monitor projects remotely.
      </Desc>

      <StepArea>
        {IconBoxData.map((data, index) => {
          return (
            <IconBox
              key={index}
              title={data.title}
              desc={data.desc}
              icon={data.icon}
            />
          );
        })}
      </StepArea>
    </Container>
  );
});

export default Collector;
