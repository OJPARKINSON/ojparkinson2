import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const calendarQuery = gql`
    {
      viewer {
          contributionsCollection {
              contributionCalendar {
              weeks {
                  contributionDays {
                      contributionCount
                      date
                      }
                  }
              }
          }
      }
    }
`;

const Calendar = () => {
  const { loading, error, data } = useQuery(calendarQuery);

  if (loading) return <h2>Loading bro</h2>
  if (error) {console.log(error); return <h2>Error loading the github calander</h2>}
  if (data) return <CalendarBody data={data} />
};

const CalendarBody = ({ data }) => {
  const { weeks } = data.viewer.contributionsCollection.contributionCalendar;
  const days = weeks.reduce((acc, { contributionDays }) => {
    contributionDays.map((day) => acc.push({ date: day.date, count: day.contributionCount }));
    return acc;
  }, []);

  return (
    <>
      <CalendarHeatmap
        startDate={weeks[0].startDate}
        endDate={new Date()}
        values={days}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          } if (value.count > 4) {
            return 'color-github-4';
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={(value) => ((value.date) ? ({ 'data-tip': `${value.date.slice(0, 10)} has count: ${value.count}`, 'data-background-color': 'black' }) : null)}
        showWeekdayLabels
      />
      <ReactTooltip />
    </>
  );
}

export default Calendar;
