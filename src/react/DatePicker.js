import { DateInput } from 'hds-react';
import { useEffect, useState } from 'react';

export default function createDatePicker() {
  return ({element, config, input}) => {
    const [currentDate, setCurrentDate] = useState(config.value);

    useEffect(() => {
      element.closest('form').addEventListener(config.submitEvent, (e) => {

        // handle validation

        setCurrentDate(null);
      });
    }, []);

    const ymdToDate = (date) => {
      let parts = date.split('-');
      return new Date(parts[0], parts[1] - 1, parts[2]);
    };

    if (input.minDate) {
      input.minDate = ymdToDate(input.minDate);
    }

    if (input.maxDate) {
      input.maxDate = ymdToDate(input.maxDate);
    }

    return React.createElement(DateInput, {
      ...input,
      value: currentDate,
      onChange: setCurrentDate,
    });
  }
}
