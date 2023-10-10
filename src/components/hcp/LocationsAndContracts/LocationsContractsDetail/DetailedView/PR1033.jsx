import React, { useEffect, useRef, useState } from 'react';
import TableView from '../../../../common/DetailedViewTable/Table.jsx';
import DropdownSelect from '../../../../common/DropdownSelect/DropdownSelect.jsx';
import { fullCompanyName } from '../../../../shared/utils';

const PR1033 = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState([{ test: '1' }]);
  const [resultsFetched, setResultsFetched] = useState('loading');
  const [dropdownData, setDropdownData] = useState([]);
  const [filter, setFilter] = useState('ALL');
  const { legacyID } = props;
  const dataPageName = 'D_HCPPR1033';
  const context = 'app/context';
  const options = {
    invalidateCache: true
  };

  const fetchData = () => {
    const parameters = { LegacyProviderID: legacyID };
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          setData(response?.PR1032);
          setResultsFetched('fetched');
          if (response?.ErrorPage) {
            setErrorMsg(response.ErrorPage);
          }
          setIsLoading(false);
        }
      )
      .catch(error => {
        console.log('error' + error);
        setErrorMsg(error);
        setResultsFetched('error');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [legacyID]);

  useEffect(() => {
    PCore.getDataPageUtils()
      .getDataAsync('D_CompanyDetailsList', context)
      .then(response => {
        setDropdownData(response?.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const changeCompanyFilter = filter => {
    //setLoading(true);
    setFilter(filter);
  };

  const meta = {
    columns: [
      { label: `LOB`, align: 'left', fieldId: 'LOB' },
      { label: `Effective Date`, align: 'left', fieldId: 'EffectiveDates' },
      { label: `Expiration Date`, align: 'left', fieldId: 'ExpirationDates' },
      { label: `Age Limit`, align: 'left', fieldId: 'tbd' },
      { label: `Parent Code`, align: 'left', fieldId: 'Parent Code' },
      { label: `Area`, align: 'left', fieldId: 'Area' },
      { label: `POrg`, align: 'left', fieldId: 'tbd' },
      { label: `Practice Size Limit`, align: 'left', fieldId: 'tbd' },
      { label: `Panel Code`, align: 'left', fieldId: 'PanelCode' },
      {
        label: `Primary Care Capitation Code`,
        align: 'left',
        fieldId: 'PrimaryCareCapitationCode'
      },
      { label: `Gender`, align: 'left', fieldId: 'Sex' },
      { label: `Accept`, align: 'left', fieldId: 'Accept' },
      { label: `Reason`, align: 'left', fieldId: 'Reason' }
    ]
  };

  return (
    <>
      <div style={{ width: '20%' }}>
        <DropdownSelect
          label={'Company'}
          changeEvent={changeCompanyFilter}
          data={dropdownData?.map(obj => {
            return fullCompanyName(obj);
          })}
        />
      </div>
      <TableView
        errorMsg={errorMsg}
        isLoading={isLoading}
        meta={meta}
        resultsFetched={resultsFetched}
        data={data}
        tableWidth='130%'
      />
    </>
  );
};

export default PR1033;
