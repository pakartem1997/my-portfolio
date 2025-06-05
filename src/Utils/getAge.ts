export function getAge(dateString: string): number {
  const [dayStr, monthStr, yearStr] = dateString.split(/[-.\/]/);

  if (!yearStr || !monthStr || !dayStr) {
    throw new Error('Некорректный формат даты');
  }

  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10) - 1;
  const day = parseInt(dayStr, 10);

  const birthDate = new Date(year, month, day);

  if (isNaN(birthDate.getTime())) {
    throw new Error('Некорректная дата рождения');
  }

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
