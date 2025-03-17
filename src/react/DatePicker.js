import { DateInput } from 'hds-react';
import { useEffect, useState } from 'react';

function handleContactForm7Events({form, inputName, events, updateValue, setErrorText}) {
  const {
    formInvalid,
    // formSpam,
    formSent,
    // formFailed,
    // formSubmit
  } = events || {};

  if (formInvalid) {
    form.addEventListener(formInvalid, (e) => {
      const {apiResponse} = e.detail || {};
      const {invalid_fields} = apiResponse || {};

      if (Array.isArray(invalid_fields)) {
        const invalidField = invalid_fields.find(invalid => invalid.field === inputName);

        invalidField && setErrorText(invalidField.message);
      }
    });
  }

  // if (formSpam) {
  //   form.addEventListener(formSpam, (e) => console.log(e));
  // }

  if (formSent) {
    form.addEventListener(formSent, (e) => {
      const {apiResponse} = e.detail || {};
      const {status} = apiResponse || {};

      ('mail_sent' === status) && updateValue('');
    });
  }

  // if (formFailed) {
  //   form.addEventListener(formFailed, (e) => console.log(e));
  // }

  // if (formSubmit) {
  //   form.addEventListener(formFailed, (e) => console.log(e));
  // }
}

export default function createDatePicker() {
  return ({element, config, events, input}) => {
    const [currentDate, setCurrentDate] = useState(config.value);
    const [errorText, setErrorText] = useState(null);

    const updateValue = (value) => {
      setErrorText(null);
      setCurrentDate(value);
    };

    const partsToDate = ({year, month, day}) => {
      return new Date(year, month - 1, day);
    }

    const ymdToDate = (date) => {
      if (typeof date === 'string' || date instanceof String) {
        let parts = date.split('-');
        return partsToDate({year: parts[0], month: parts[1], day: parts[2]});
      }

      return date;
    };

    useEffect(() => {
      let form = element.closest('form');

      if (config.handler && 'contactForm7' === config.handler) {
        handleContactForm7Events({
          form,
          inputName: input.name,
          events,
          updateValue,
          setErrorText
        });
      }
    }, []);

    if (input.minDate) {
      input.minDate = ymdToDate(input.minDate);
    }

    if (input.maxDate) {
      input.maxDate = ymdToDate(input.maxDate);
    }

    return React.createElement(DateInput, {
      ...input,
      errorText,
      value: currentDate,
      onChange: updateValue,
    });
  }
}
