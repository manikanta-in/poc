import { boolean } from '@storybook/addon-knobs';

export const FullAddress = data => {
  const address = `${data.AddressLine1 ? `${data.AddressLine1} ` : ''}${
    data.AddressLine2 ? `${data.AddressLine2} ,` : ''
  }${data.City ? `${data.City} ,` : ''}${data.State ? `${data.State} ` : ''}${
    data?.StateProvinceName ? `${data?.StateProvinceName} ` : ''
  }${data.ZipCode ? `${data.ZipCode}` : ''}`;
  return address != '' ? address : '--';
};

export const constructAddress = data => {
  const result = [];
  if (data.AddressLine1 && data.AddressLine2) {
    result.push(`${data.AddressLine1} ${data.AddressLine2}`);
  } else if (data.AddressLine1) {
    result.push(data.AddressLine1);
  } else if (data.AddressLine2) {
    result.push(data.AddressLine2);
  }

  if (data.City) {
    result.push(data.City);
  }

  if ((data.State || data.StateProvinceName) && data.ZipCode) {
    result.push(
      `${data.State ? `${data.State} ` : ''}${
        data?.StateProvinceName ? `${data?.StateProvinceName} ` : ''
      } ${data.ZipCode ? `${data.ZipCode}` : ''}`
    );
  } else if (data.State || data.StateProvinceName) {
    result.push(
      `${data.State ? `${data.State} ` : ''}${
        data?.StateProvinceName ? `${data?.StateProvinceName} ` : ''
      }`
    );
  } else if (data.ZipCode) {
    result.push(data.ZipCode);
  }

  return result.length > 0 ? result.join(', ') : '--';
};

export const FullName = data => {
  const name = `${data.Prefix ? `${data.Prefix} ` : ''}${
    data.FirstName ? `${data.FirstName} ` : ''
  }${data.MiddleName ? `${data.MiddleName} ` : ''}${data.LastName ? `${data.LastName} ` : ''}${
    data.Suffix ? `${data.Suffix}` : ''
  }`;
  return name != '' ? name : '--';
};

export const ContactName = data => {
  const contactname = `${data.ContactTitleName ? `${data.ContactTitleName} ` : ''}${
    data.ContactFirstName ? `${data.ContactFirstName} ` : ''
  }${data.ContactMiddleName ? `${data.ContactMiddleName} ` : ''}${
    data.ContactLastName ? `${data.ContactLastName} ` : ''
  }`;
  return contactname != '' ? contactname : '--';
};

export const changeDateFormate = inputDate => {
  let splitDate = inputDate?.split('-');
  //console.log('splitDate', splitDate);

  let year = splitDate !== undefined ? splitDate[0] : '';
  let month = splitDate !== undefined ? splitDate[1] : '';
  let day = splitDate !== undefined ? splitDate[2] : '';

  if (year && month && day) {
    return month + '/' + day + '/' + year;
  }
};

export const changeFormat = input => {
  if (input) {
    //let formatedInput = input.replace('-', 'to');
    let formatedInput = input.replace(/pm/gi, 'PM');
    return formatedInput.replace(/am/gi, 'AM');
  }
  return input;
};

export const fullCompanyName = input => {
  return `${input.CompanyName} (${input.CompanyCode})`;
};
