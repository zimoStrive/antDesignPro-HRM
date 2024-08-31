import { Column } from '@ant-design/charts';
import { memo } from 'react';

const ColumnCpns = memo(({ styleData, renderList, title }) => {
  const config = {
    title,
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
    <div className="pie-cpns" style={styleData}>
      <Column {...config} />
    </div>
  );
});

export default ColumnCpns;
