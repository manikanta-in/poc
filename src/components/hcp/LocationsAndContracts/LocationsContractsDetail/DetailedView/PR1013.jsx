import React, { useEffect, useRef, useState } from 'react';
import TableView from '../../../../common/DetailedViewTable/Table.jsx';
import DropdownSelect from '../../../../common/DropdownSelect/DropdownSelect.jsx';
import { fullCompanyName } from '../../../../shared/utils';
import { TextUnderLineHeader } from './style.js';

const PR1013 = props => {
  const [filteredData, setFilteredData] = useState();
  const { pr1013Data, errorMsg, isLoading, resultsFetched, setIsLoading, dropdownData } = props;
  const [filter, setFilter] = useState(fullCompanyName(dropdownData[0]));
  const context = 'app/context';

  useEffect(() => {
    if (pr1013Data && filter && filter != '') {
      setIsLoading(true);
      const startIndex = filter.indexOf('(');
      const endIndex = filter.indexOf(')');
      const companyCode = filter.substring(startIndex + 1, endIndex);
      console.log('company code', companyCode);
      setFilteredData(pr1013Data?.filter(item => item.CompanyName.includes(companyCode)));
      setIsLoading(false);
    }
  }, [filter, pr1013Data]);

  const changeCompanyFilter = filter => {
    //setLoading(true);
    setFilter(filter);
  };

  const meta = {
    columns: [
      { label: `Vendor`, align: 'left', fieldId: 'VendorNumber', width: '4%' },
      { label: `Company`, align: 'left', fieldId: 'CompanyName', width: '3%' },
      { label: `LOB`, align: 'left', fieldId: 'LOB', width: '2%' },
      { label: `Effective Dates`, align: 'left', fieldId: 'EffectiveDateText', width: '2%' },
      { label: `Termination Date`, align: 'left', fieldId: 'ExpirationStatus', width: '3%' },
      { label: `POrg`, align: 'left', fieldId: 'POrgCode' },
      { label: `Cy`, align: 'left', fieldId: 'ProviderCapacityCode' },
      { label: `CT`, align: 'left', fieldId: 'ClaimType' },
      { label: `POS`, align: 'left', fieldId: 'PlaceOfService' },
      { label: `Par`, align: 'left', fieldId: 'ParProviderCode' },
      { label: `OTF`, align: 'left', fieldId: 'ORGClaimTFilingLimit' },
      { label: `Hld`, align: 'left', fieldId: 'ORGClaimTFilingLimitHC' },
      { label: `OIF`, align: 'left', fieldId: 'ORGClaimIFilingLimit' },
      { label: `Hld`, align: 'left', fieldId: 'ORGClaimIFilingLimitHC' },
      { label: `PrcPnt`, align: 'left', fieldId: 'PricingPointerCode' },
      { label: `Area`, align: 'left', fieldId: 'ServiveAreaCode' },
      { label: `ExCd`, align: 'left', fieldId: 'ExtensionCode' },
      { label: `Edt`, align: 'left', fieldId: 'ServiceEditCode' },
      { label: `U`, align: 'left', fieldId: 'UCPricing' },
      { label: `Pc`, align: 'left', fieldId: 'UCPercentile' },
      { label: `Desc`, align: 'left', fieldId: 'Desc' },
      { label: `Fee`, align: 'left', fieldId: 'FeeScheduleCode1' },
      { label: `Fee`, align: 'left', fieldId: 'FeeScheduleCode2' },
      { label: `Fee`, align: 'left', fieldId: 'FeeScheduleCode3' },
      { label: `Fee`, align: 'left', fieldId: 'FeeScheduleCode4' },
      { label: `Fee`, align: 'left', fieldId: 'FeeScheduleCode5' },
      { label: `Clc`, align: 'left', fieldId: 'CLCSetCode' },
      { label: `Med`, align: 'left', fieldId: 'MedCalculationSet' },
      { label: `Prc`, align: 'left', fieldId: 'PrcCalculationSetCode' },
      { label: `B`, align: 'left', fieldId: 'FeeTypeCode' },
      { label: `Whld`, align: 'left', fieldId: 'WhldPercentage' },
      { label: `Disc`, align: 'left', fieldId: 'DiscPercentage' },
      { label: `Sur %`, align: 'left', fieldId: 'SurPercentage' },
      { label: `SC`, align: 'left', fieldId: 'SCCode' },
      { label: `SP`, align: 'left', fieldId: 'SPProcedure_PricingCode' },
      { label: `ATF`, align: 'left', fieldId: 'ADUClaimTFilingLimit' },
      { label: `Hld`, align: 'left', fieldId: 'ADUClaimTFilingLimitHC' },
      { label: `AIF`, align: 'left', fieldId: 'ADUClaimIFilingLimit' },
      { label: `Hld`, align: 'left', fieldId: 'ADUClaimIFilingLimitHC' },
      { label: `Claim Pay Limit`, align: 'left', fieldId: 'ClaimPaymentLimit', width: '3%' },
      { label: `P`, align: 'left', fieldId: 'PaymentLimit' },
      { label: `A`, align: 'left', fieldId: 'A' },
      { label: `Threshold`, align: 'left', fieldId: 'AllowedAmountThreshold', width: '2%' },
      { label: `P`, align: 'left', fieldId: 'Pricer' },
      { label: `P#`, align: 'left', fieldId: 'PayerNumber' },
      { label: `R`, align: 'left', fieldId: 'Reorder' },
      { label: `PID`, align: 'left', fieldId: 'GrouperID' },
      { label: `S/L`, align: 'left', fieldId: 'LossScheduleCode' },
      { label: `D`, align: 'left', fieldId: 'Dprint' },
      { label: `Apr`, align: 'left', fieldId: 'AddlReimbursementPointer' },
      { label: `Ppd`, align: 'left', fieldId: 'PricerProduct' },
      { label: `Sys Data`, align: 'left', fieldId: 'SysDate' },
      { label: `LstChng`, align: 'left', fieldId: 'LstChng' },
      { label: `User ID`, align: 'left', fieldId: 'UserID' },
      { label: `Terminal Id`, align: 'left', fieldId: 'TerminalId' }
    ]
  };
  return (
    <>
      <TextUnderLineHeader style={{ marginBottom: '1%' }}>
        Provider Contract Maintenance
        <p className='header-line' style={{ marginTop: '1vh' }}></p>
      </TextUnderLineHeader>
      <div style={{ width: '20%' }} title={filter}>
        <DropdownSelect
          label={'Company'}
          changeEvent={changeCompanyFilter}
          data={dropdownData?.map(obj => {
            return fullCompanyName(obj);
          })}
          hideAllOption={true}
        />
      </div>
      <TableView
        errorMsg={errorMsg}
        isLoading={isLoading}
        meta={meta}
        resultsFetched={resultsFetched}
        data={filteredData}
        tableWidth='325%'
      />
    </>
  );
};

export default PR1013;
