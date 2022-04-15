import React, { useId, useEffect } from 'react';
import navStore from '../../global/nav.store';
import IconBox from '../lib/icon_box/IconBox.component';
import { Container, Tag, Title, Desc, StepArea } from './Agent.component';

const Agent = () => {
  const sc_agent = useId();
  const set_Agent = navStore((state) => state.setAgent);

  // ======= set agent section id -->
  useEffect(() => {
    set_Agent(sc_agent);
  }, [sc_agent]);
  const IconBoxData = [
    {
      icon: `lucide:mouse-pointer-click`,
      title: `SIgn Up`,
      delay: 100,
      desc: `Take a few minutes to sign up. It's totally free!`,
    },
    {
      icon: `heroicons-solid:selector`,
      title: `Select a Task`,
      delay: 200,
      desc: `Select a task from the available tasks on the platform.`,
    },
    {
      icon: `fluent:clipboard-task-list-ltr-24-regular`,
      title: `Complete Task`,
      delay: 300,
      desc: `Carefully read the instructions and complete the task.`,
    },
    {
      icon: `bi:cash-coin`,
      title: `Get Paid`,
      delay: 400,
      desc: `Withdraw your earnings with one of our fast and secure methods.`,
    },
  ];
  return (
    <Container id={sc_agent}>
      {/* ====== tag */}
      <Tag data-aos='fade-right'>Become an Agent</Tag>
      {/* ====== title */}
      <Title data-aos='fade-right' data-aos-delay='150'>
        How it works
      </Title>
      {/* ====== desc */}
      <Desc data-aos='fade-right' data-aos-delay='300'>
        Get paid to make an impact. Earn money from the comfort of your home or
        on the go - whenever and wherever you like.
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

export default Agent;
