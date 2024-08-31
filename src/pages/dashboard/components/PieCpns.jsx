import { Pie } from '@ant-design/charts';
import { memo } from 'react';

const PieCpns = memo(({ styleData, title, renderList }) => {
  const config = {
    title: title,
    data: renderList,
    angleField: 'value',
    colorField: 'name',
    label: {
      text: 'name',
      position: 'outside',

      transform: [
        {
          type: 'overlapDodgeY',
        },
      ],
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    height: 330,
  };
  return (
    <div className="pie-cpns" style={styleData}>
      <Pie {...config} />
    </div>
  );
});

export default PieCpns;
