import { ResponsiveBar } from '@nivo/bar';
import React from 'react';

type ResponsiBarProps = {
  data: any;
  title: string;
};

export const MyResponsiveBar = ({ data, title }: ResponsiBarProps) => (
  <>
    <h2 style={{ textAlign: 'center' }}>{title}</h2>
    <ResponsiveBar
      data={data}
      keys={['id']}
      indexBy="answer"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: 'linear' }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        legend: 'Número de respostas',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
    />
  </>
);
