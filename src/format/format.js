import dayjs from 'dayjs';

export const shortDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      description = `${description.substr(0, maxLength)}...`;
    }
    return description;
  };

export const reformatDate = (date, format) => dayjs(date).format(format);