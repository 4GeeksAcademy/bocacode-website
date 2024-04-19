export const formatDate = (dateStr) => {
  // Parse the date string into a Date object
  const dateObj = new Date(dateStr);

  // Create an array of month names
  const monthNames = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ];

  // Get the month and day from the Date object
  const monthIndex = dateObj.getMonth();
  const day = dateObj.getDate();

  // Format the date as desired
  const formattedDate = `${monthNames[monthIndex]} ${day}`;

  return formattedDate;
}
