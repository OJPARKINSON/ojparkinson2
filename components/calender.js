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
            totalContributions
            months {
                name
                firstDay
            }
            weeks {
                firstDay
                contributionDays {
                color
                contributionCount
                date
                weekday
                }
            }
            }
        }
        }
    }
`;

const Calendar = () => {
    const { loading, error, data } = useQuery(calendarQuery);
    console.log({ loading, error, data })
    if (loading) { 
        return 'loading bro'
    } else if (error) { 
        return 'error loading the github calander'
    } else {
        return (
            <>
                <CalendarHeatmap
                    startDate={data.viewer.contributionsCollection.contributionCalendar.weeks[0].startDate}
                    endDate={new Date()}
                    values={data.viewer.contributionsCollection.contributionCalendar.weeks.reduce((acc, current) => {
                        current.contributionDays.map(day => acc.push({ date: day.date, count: day.contributionCount}))
                        return acc;
                        }, [])}
                    classForValue={value => {
                        if (!value) {
                            return 'color-empty';
                        } else if (value.count > 4) {
                            return `color-github-4`
                        } else {
                            return `color-github-${value.count}`;
                        }
                    }}
                    tooltipDataAttrs={value => (value.date) ? ({'data-tip': `${value.date.slice(0,10)} has count: ${value.count}`, 'data-background-color': 'black'}) : null}
                    showWeekdayLabels={true}
                    />
                <ReactTooltip />
            </>
        )
    }
};

export default Calendar;