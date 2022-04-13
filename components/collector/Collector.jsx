import React from 'react';
import IconBox from '../lib/icon_box/IconBox.component';

// ======= component import -->
import { Container, Tag, Title, Desc, StepArea } from './Collector.component';

const Collector = () => {
  const IconBoxData = [
    {
      icon: `lucide:mouse-pointer-click`,
      title: `Sign Up`,
      delay: 100,
      desc: `Take a few minutes to sign up. It's totally free!`,
    },
    {
      icon: `ion:create-outline`,
      title: `Create a Task`,
      delay: 200,
      desc: `Create a task with detailed instructions.`,
    },
    {
      icon: `akar-icons:circle-check`,
      title: `Accept Completed Task`,
      delay: 300,
      desc: `Review and accept completed task.`,
    },
    {
      icon: `bi:cash-coin`,
      title: `Payout`,
      delay: 400,
      desc: `Authorise payments for accepted task.`,
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
              ic_aosDelay={data.delay}
              ic_aosData='zoom-out'
            />
          );
        })}
      </StepArea>
    </Container>
  );
};

export default Collector;
