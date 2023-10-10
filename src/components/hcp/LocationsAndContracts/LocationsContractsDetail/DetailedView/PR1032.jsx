import React, { useEffect, useRef, useState } from 'react';
import TableView from '../../../../common/DetailedViewTable/Table.jsx';
import DropdownSelect from '../../../../common/DropdownSelect/DropdownSelect.jsx';
import { fullCompanyName } from '../../../../shared/utils';

const PR1032 = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState([{ test: '1' }]);
  const [resultsFetched, setResultsFetched] = useState('loading');
  const [dropdownData, setDropdownData] = useState([]);
  const [filter, setFilter] = useState('ALL');
  const { legacyID } = props;
  const dataPageName = 'D_HCPPR1032';
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
      { label: `Vendor ID`, align: 'left', fieldId: 'VendorID' },
      { label: `POrg`, align: 'left', fieldId: 'Porg' },
      { label: `Effective Dates`, align: 'left', fieldId: 'EffectiveDate' },
      { label: `CY`, align: 'left', fieldId: 'CapitatedCode' },
      { label: `Ct`, align: 'left', fieldId: 'ClaimType' },
      { label: `PP`, align: 'left', fieldId: 'ProviderParenetCode' },
      { label: `CPP`, align: 'left', fieldId: 'ProviderCapacityCode' },
      { label: `Hd`, align: 'left', fieldId: 'ProviderHoldCode' },
      { label: `P`, align: 'left', fieldId: 'PricerFlag' },
      { label: `PPar`, align: 'left', fieldId: 'adhoc' },
      { label: `Area`, align: 'left', fieldId: 'Area' },
      { label: `Panl`, align: 'left', fieldId: 'PanelCode' },
      { label: `D`, align: 'left', fieldId: 'DrgOverride' },
      { label: `PID`, align: 'left', fieldId: 'GrouperProviderId' },
      { label: `I`, align: 'left', fieldId: 'i' },
      { label: `d`, align: 'left', fieldId: 'DrgOverride' },
      { label: `r`, align: 'left', fieldId: 'RebundlingField' },
      { label: `User ID`, align: 'left', fieldId: 'userID' },
      { label: `Terminal ID`, align: 'left', fieldId: 'terminalID' },
      { label: `SysDate`, align: 'left', fieldId: 'sysDate' },
      { label: `LstChange`, align: 'left', fieldId: 'lstChange' }
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
        tableWidth='120%'
      />
    </>
  );
};

export default PR1032;
