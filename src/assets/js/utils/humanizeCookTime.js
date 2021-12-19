import dayjs from 'dayjs';

const humanizeCookTime = (time) => {
  const duration = dayjs.duration(time, 'seconds');
  const hours = duration.as('hours');

  if (hours < 1) {
    return '' + Math.round(duration.as('minutes')) + ' min';
  } else if (hours === 1) {
    return '' + hours + ' hour';
  }
  return '' + (+hours.toFixed(2)) + ' hours';
};

export default humanizeCookTime;