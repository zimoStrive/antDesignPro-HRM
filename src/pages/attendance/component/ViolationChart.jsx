import { Column } from '@ant-design/charts';
import { memo } from 'react';

const ViolationChart = memo(({ renderList, title }) => {
  const config = {
    data: renderList,
    xField: 'x',
    yField: 'y',
    label: {
      text: 'y',
      textBaseline: 'bottom',
    },

    style: {
      // 圆角样式
      radiusTopLeft: 10,
      radiusTopRight: 10,
    },
  };

  return (
    <div className="block-container">
      <div className="title">{title}</div>
      <Column {...config} />
    </div>
  );
});

export default ViolationChart;
