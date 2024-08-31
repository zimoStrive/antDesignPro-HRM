import { Bar } from '@ant-design/charts';
import { memo } from 'react';

const AgeColumn = memo(({ renderList, styleData }) => {
  const config = {
    title: '平均年龄',
    data: renderList,
    xField: 'name',
    yField: 'age',
    sort: {
      reverse: false,
    },
    reverse: true,
    label: {
      text: 'age',
      formatter: (datum) => {
        return `${datum}%`;
      },
      style: {
        textAlign: (d) => (+d.age > 0.008 ? 'right' : 'start'),
        fill: (d) => (+d.age > 0.008 ? '#fff' : '#000'),
        dx: (d) => (+d.age > 0.008 ? -5 : 5),
      },
    },
    axis: {
      y: {
        labelFormatter: (datum) => {
          return `${datum}%`;
        },
      },
    },
    // scale: {
    //   y: {
    //     domainMax: 100,
    //   },
    // },
    height: 300,
  };
  return (
    <div className="pie-cpns" style={styleData}>
      <Bar {...config} />
    </div>
  );
});

export default AgeColumn;
