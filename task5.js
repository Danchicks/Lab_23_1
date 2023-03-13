function getMaxDate(datesArray) {
    let maxDate = datesArray[0];
  
    for (let i = 1; i < datesArray.length; i++) {
      if (datesArray[i] > maxDate) {
        maxDate = datesArray[i];
      }
    }
  
    return maxDate;
  }
  
  const dates = [
    new Date('2022-02-28'),
    new Date('2023-02-28'),
    new Date('2021-02-28'),
    new Date('2022-03-01')
  ];
  
  const maxDate = getMaxDate(dates);
  
  console.log(maxDate);