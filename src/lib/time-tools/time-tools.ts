export const durationToHumanTime = (duration: number) => {
  let hours   = Math.floor(duration / 3600);
  let minutes = Math.floor((duration - (hours * 3600)) / 60);
  let result = '';

  if (hours == 0 && minutes == 0) {
    return 'Меньше минуты';
  }

  if (hours == 0) {
    result += `${hours} часов,`;
  }

  if (hours == 1) {
    result += `${hours} час,`;
  }

  if (hours > 1 && hours <= 4) {
    result += `${hours} часа,`;
  }

  if (hours > 4) {
    result += `${hours} часов,`;
  }

  if (minutes == 0) {
    result += ` ${minutes} минут`;
  }

  if (minutes == 1) {
    result += ` ${minutes} минута`;
  }

  if (minutes > 1 && minutes <= 4) {
    result += ` ${minutes} минуты`;
  }

  if (minutes > 4) {
    result += ` ${minutes} минут`;
  }

  return result;
}