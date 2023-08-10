import PropTypes from 'prop-types';
import {
  Statistic,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticList>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatisticLabel>{stat.label}</StatisticLabel>
            <Percentage>{stat.percentage}%</Percentage>
          </StatisticItem>
        ))}
      </StatisticList>
    </Statistic>
  );
};

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

const getRandomHexColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
