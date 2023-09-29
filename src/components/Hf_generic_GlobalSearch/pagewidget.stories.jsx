import HfGenericGlobalSearch from './index.jsx';

if (!window.PCore) {
  window.PCore = {};
}

window.PCore.getMashupApi = () => {
  return {
    createCase: (className, targetContext, caseOptions) => {
      return new Promise(resolve => {
        console.log('created case for ', className);
        resolve({
          response: 200
        });
      });
    }
  };
};

window.PCore.getDataPageUtils = () => {
  return {
    getDataAsync: (dataView, context, parameters) => {
      return new Promise(resolve => {
        if (dataView === 'D_GetEnabledHCOs') {
          resolve({
            fetchDateTime: '2023-08-29T16:40:57.277Z',
            pxObjClass: 'Pega-API-DataExploration-Data',
            resultCount: 1,
            data: [
              {
                OrganizationName: 'NYU',
                pxObjClass: 'HF-UPE-Data-EnableHCOContract'
              }
            ],
            hasMoreResults: false
          });
        } else if (dataView === 'D_CompanyDetailsList') {
          resolve({
            fetchDateTime: '2023-09-14T21:23:56.101Z',
            pxObjClass: 'Pega-API-DataExploration-Data',
            resultCount: 6,
            data: [
              {
                pxSaveDateTime: null,
                pxUpdateSystemID: null,
                pxUpdateDateTime: null,
                pxUpdateOpName: null,
                pxUpdateOperator: null,
                pxObjClass: 'HF-UPE-Data-CompanyDetails',
                CompanyName: 'HIX:PHSP Individual',
                pxCreateOperator: null,
                pxCreateDateTime: null,
                pxCreateSystemID: null,
                pyGUID: '00575c4f-5ca7-4308-995e-65b3ac1fdfcf',
                pxCommitDateTime: null,
                pxCreateOpName: null,
                CompanyCode: '42'
              },
              {
                pxSaveDateTime: null,
                pxUpdateSystemID: null,
                pxUpdateDateTime: null,
                pxUpdateOpName: null,
                pxUpdateOperator: null,
                pxObjClass: 'HF-UPE-Data-CompanyDetails',
                CompanyName: 'Senior Health Partners',
                pxCreateOperator: null,
                pxCreateDateTime: null,
                pxCreateSystemID: null,
                pyGUID: '120f0706-e62f-4596-9a1f-5ee427f271b1',
                pxCommitDateTime: null,
                pxCreateOpName: null,
                CompanyCode: '2'
              },
              {
                pxSaveDateTime: null,
                pxUpdateSystemID: null,
                pxUpdateDateTime: null,
                pxUpdateOpName: null,
                pxUpdateOperator: null,
                pxObjClass: 'HF-UPE-Data-CompanyDetails',
                CompanyName: 'Healthfirst-Managed Medicaid',
                pxCreateOperator: null,
                pxCreateDateTime: null,
                pxCreateSystemID: null,
                pyGUID: '6d6af11e-eaae-468e-bd34-57806eac51aa',
                pxCommitDateTime: null,
                pxCreateOpName: null,
                CompanyCode: '1'
              },
              {
                pxSaveDateTime: null,
                pxUpdateSystemID: null,
                pxUpdateDateTime: null,
                pxUpdateOpName: null,
                pxUpdateOperator: null,
                pxObjClass: 'HF-UPE-Data-CompanyDetails',
                CompanyName: 'Healthfirst-Medicare',
                pxCreateOperator: null,
                pxCreateDateTime: null,
                pxCreateSystemID: null,
                pyGUID: '7a6d225b-d7c5-42eb-8df2-783563ce4d6d',
                pxCommitDateTime: null,
                pxCreateOpName: null,
                CompanyCode: '30'
              },
              {
                pxSaveDateTime: null,
                pxUpdateSystemID: null,
                pxUpdateDateTime: null,
                pxUpdateOpName: null,
                pxUpdateOperator: null,
                pxObjClass: 'HF-UPE-Data-CompanyDetails',
                CompanyName: 'Healthfirst Insurance Company',
                pxCreateOperator: null,
                pxCreateDateTime: null,
                pxCreateSystemID: null,
                pyGUID: '91c43473-2c4b-435a-a0a6-d32aca16439c',
                pxCommitDateTime: null,
                pxCreateOpName: null,
                CompanyCode: '45'
              },
              {
                pxSaveDateTime: null,
                pxUpdateSystemID: null,
                pxUpdateDateTime: null,
                pxUpdateOpName: null,
                pxUpdateOperator: null,
                pxObjClass: 'HF-UPE-Data-CompanyDetails',
                CompanyName: 'Completecare',
                pxCreateOperator: null,
                pxCreateDateTime: null,
                pxCreateSystemID: null,
                pyGUID: 'c48c9d24-0fbc-4750-8530-ea93588e514d',
                pxCommitDateTime: null,
                pxCreateOpName: null,
                CompanyCode: '34'
              }
            ],
            hasMoreResults: false
          });
        }
      });
    },
    getPageDataAsync: (dataView, context, parameters, options) => {
      return new Promise(resolve => {
        if (dataView === 'D_HCPAdvancedSearch' && !parameters.FirstName) {
          resolve({
            pzLoadTime: 'September 5, 2023 2:37:50 PM UTC',
            pzPageNameHash: '_pa107544013677859pz',
            TotalRecords: 70,
            ProviderRecords: [
              {
                ProfessionalID: 'P-0000-33PU',
                Medicare: '123592',
                FirstName: 'Multiple Names Found',
                NetworkStatus: 'Pending',
                NPI: '1720268584',
                ZipCode: '07103',
                VendorID: '',
                StateProvinceName: 'New Jersey',
                Prefix: '',
                TaxID: '222095812',
                City: 'NEWARK',
                MiddleName: 'J',
                AddressLine2: '',
                AddressLine1: '150 BERGEN ST  UH F-102',
                Suffix: '',
                Phone: '973-972-3555',
                LastName: 'Multiple Names Found',
                Medicaid: '0160237'
              },
              {
                ProfessionalID: 'P-0000-33PU',
                Medicare: '123592',
                FirstName: 'Multiple Names Found',
                NetworkStatus: 'Pending',
                NPI: '1720268584',
                ZipCode: '07202',
                VendorID: '',
                StateProvinceName: 'New Jersey',
                Prefix: '',
                TaxID: '222095812',
                City: 'ELIZABETH',
                MiddleName: 'J',
                AddressLine2: '',
                AddressLine1: '225 WILLIAMSON ST',
                Suffix: '',
                Phone: '973-972-3555',
                LastName: 'Multiple Names Found',
                Medicaid: '0160237'
              },
              {
                ProfessionalID: 'P-0000-33PU',
                Medicare: '123592',
                FirstName: 'Multiple Names Found',
                NetworkStatus: 'Pending',
                NPI: '1720268584',
                ZipCode: '07101',
                VendorID: '',
                StateProvinceName: 'New Jersey',
                Prefix: '',
                TaxID: '222095812',
                City: 'NEWARK',
                MiddleName: 'J',
                AddressLine2: '',
                AddressLine1: '150 BERGEN ST #F-102',
                Suffix: '',
                Phone: '973-972-5678',
                LastName: 'Multiple Names Found',
                Medicaid: '0160237'
              },
              {
                ProfessionalID: 'P-0000-33PU',
                Medicare: '123592',
                FirstName: 'Multiple Names Found',
                NetworkStatus: 'Pending',
                NPI: '1720268584',
                ZipCode: '07103',
                VendorID: '',
                StateProvinceName: 'New Jersey',
                Prefix: '',
                TaxID: '222095812',
                City: 'NEWARK',
                MiddleName: 'J',
                AddressLine2: '',
                AddressLine1: '150 BERGEN STREET',
                Suffix: '',
                Phone: '',
                LastName: 'Multiple Names Found',
                Medicaid: '0160237'
              },
              {
                ProfessionalID: 'P-0000-40X2',
                Medicare: '123867',
                FirstName: 'VILAYVANH',
                NetworkStatus: 'Out-Of-Network',
                NPI: '1558312264',
                ZipCode: '07018',
                VendorID: '',
                StateProvinceName: 'New Jersey',
                Prefix: '',
                TaxID: '510625008',
                City: 'EAST ORANGE',
                MiddleName: '',
                AddressLine2: '',
                AddressLine1: '104 S MUNN AVE',
                Suffix: '',
                Phone: '973-337-2893',
                LastName: 'Multiple Names Found',
                Medicaid: ''
              },
              {
                ProfessionalID: 'P-0000-40X2',
                Medicare: '123867',
                FirstName: 'VILAYVANH',
                NetworkStatus: 'Out-Of-Network',
                NPI: '1558312264',
                ZipCode: '07018',
                VendorID: '',
                StateProvinceName: 'New Jersey',
                Prefix: '',
                TaxID: '510625008',
                City: 'EAST ORANGE',
                MiddleName: '',
                AddressLine2: '',
                AddressLine1: '104 S. MUNN AVE.',
                Suffix: '',
                Phone: '',
                LastName: 'Multiple Names Found',
                Medicaid: ''
              },
              {
                ProfessionalID: 'P-0000-4UTQ',
                Medicare: '123516',
                FirstName: 'TAMIR',
                NetworkStatus: 'Out-Of-Network',
                NPI: '1164594784',
                ZipCode: '07103',
                VendorID: '',
                StateProvinceName: 'New Jersey',
                Prefix: '',
                TaxID: '221775306',
                City: 'NEWARK',
                MiddleName: '',
                AddressLine2: '',
                AddressLine1: '150 BERGEN STREET',
                Suffix: '',
                Phone: '973-972-4255',
                LastName: 'Multiple Names Found',
                Medicaid: '0160245'
              },
              {
                ProfessionalID: 'P-0000-4UTQ',
                Medicare: '123516',
                FirstName: 'TAMIR',
                NetworkStatus: 'Out-Of-Network',
                NPI: '1164594784',
                ZipCode: '07306-1108',
                VendorID: '',
                StateProvinceName: 'New Jersey',
                Prefix: '',
                TaxID: '223644535',
                City: 'JERSEY CITY',
                MiddleName: '',
                AddressLine2: '',
                AddressLine1: '142 PALISADES AVENUE #205',
                Suffix: '',
                Phone: '',
                LastName: 'Multiple Names Found',
                Medicaid: '0160245'
              },
              {
                ProfessionalID: 'P-0000-4UTQ',
                Medicare: '123516',
                FirstName: 'TAMIR',
                NetworkStatus: 'Out-Of-Network',
                NPI: '1164594784',
                ZipCode: '07081',
                VendorID: '',
                StateProvinceName: 'New Jersey',
                Prefix: '',
                TaxID: '832124345',
                City: 'SPRINGFIELD',
                MiddleName: '',
                AddressLine2: '',
                AddressLine1: '609 MORRIS AVE',
                Suffix: '',
                Phone: '201-885-4752',
                LastName: 'Multiple Names Found',
                Medicaid: '0160245'
              },
              {
                ProfessionalID: 'P-0000-4UTQ',
                Medicare: '123516',
                FirstName: 'TAMIR',
                NetworkStatus: 'Pending',
                NPI: '1164594784',
                ZipCode: '07306',
                VendorID: '',
                StateProvinceName: 'New Jersey',
                Prefix: '',
                TaxID: '222095812',
                City: 'JERSEY CITY',
                MiddleName: '',
                AddressLine2: '',
                AddressLine1: '142 PALISADES',
                Suffix: '',
                Phone: '973-972-2150',
                LastName: 'Multiple Names Found',
                Medicaid: '0160245'
              }
            ]
          });
        } else if (dataView === 'D_HCFAdvancedSearch') {
          resolve({
            FacilityRecords: [
              {
                Medicare: '',
                NetworkStatus: 'In-Network',
                ZipCode: '770155646',
                StateProvinceName: 'Andorra la Vella',
                TaxID: '153215416',
                City: 'HOUSTON',
                HCOName: 'THOMAS POWERS, MD',
                FacilityName: 'EXCELSIOR TEXAS',
                FacilityID: 'F-FAKE-0001',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '11375 CORTEZ BLVD',
                Phone: '212-305-3410'
              },
              {
                Medicare: '',
                NetworkStatus: 'In-Network',
                ZipCode: '11206',
                StateProvinceName: 'Canillo',
                TaxID: '153215416',
                City: 'HOUSTON',
                HCOName: 'CHALERM  SUNHACHAWEE, MD',
                FacilityName: 'MAIMONIDES MEDICAL CENTER',
                FacilityID: 'F-FAKE-0002',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '11375 CORTEZ BLVD',
                Phone: '347-475-0911'
              },
              {
                Medicare: '',
                NetworkStatus: 'In-Network',
                ZipCode: '34613',
                StateProvinceName: 'Encamp',
                TaxID: '153215416',
                City: 'HOUSTON',
                HCOName: 'SOMASUNDARAM  THIAGARAJAH, MD',
                FacilityName: 'GOLD CREST CARE CENTER',
                FacilityID: 'F-FAKE-0003',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '11375 CORTEZ BLVD',
                Phone: '212-844-8300'
              },
              {
                Medicare: '',
                NetworkStatus: 'In-Network',
                ZipCode: '29485-8107',
                StateProvinceName: 'Escaldes-Engordany',
                TaxID: '153215416',
                City: 'SUMMERVILLE',
                HCOName: 'OLEG  KAIM, MDPC',
                FacilityName: 'ROOSEVELT HOSPITAL',
                FacilityID: 'F-FAKE-0004',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '298 MIDLAND PKWY',
                Phone: '212-555-1209'
              },
              {
                Medicare: '',
                NetworkStatus: 'In-Network',
                ZipCode: '10708',
                StateProvinceName: 'La Massana',
                TaxID: '153215416',
                City: 'BRONXVILLE',
                HCOName: 'SANDRA  WEISS-SCHWARTZ, MD',
                FacilityName: 'CMC ORTHOPAEDICS',
                FacilityID: 'F-FAKE-0005',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '77 PONDFIELD RD',
                Phone: '313-155-3109'
              },
              {
                Medicare: '',
                NetworkStatus: 'In-Network',
                ZipCode: '770155646',
                StateProvinceName: 'Ordino',
                TaxID: '153215416',
                City: 'HOUSTON',
                HCOName: 'EUGENE R FAILLACE, DC',
                FacilityName: 'EXCEL AND REHAB & SPORTS',
                FacilityID: 'F-FAKE-0006',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '12605 EAST FWY STE 365',
                Phone: '142-305-4376'
              }
            ],
            pzLoadTime: 'August 23, 2023 7:48:47 PM UTC',
            pzPageNameHash: '_pa1316090355877583pz',
            TotalRecords: 6
          });
        } else if (dataView === 'D_HCOAdvancedSearch') {
          resolve({
            pzLoadTime: 'August 23, 2023 7:49:48 PM UTC',
            pzPageNameHash: '_pa1316158948576754pz',
            TotalRecords: 6,
            OrganizationRecords: [
              {
                EntityName: 'THOMAS POWERS, MD',
                Medicare: '367796',
                NetworkStatus: 'In-Network',
                NPI: '1225335482',
                ZipCode: '770155646',
                VendorID: '',
                TaxID: '153215416',
                City: 'HOUSTON',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '11375 CORTEZ BLVD',
                Phone: '212-305-3410',
                State: 'Andorra la Vella',
                ID: 'O-FAKE-0001'
              },
              {
                EntityName: 'CHALERM  SUNHACHAWEE, MD',
                Medicare: '367796',
                NetworkStatus: 'In-Network',
                NPI: '1225335482',
                ZipCode: '11206',
                VendorID: '',
                TaxID: '153215416',
                City: 'HOUSTON',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '11375 CORTEZ BLVD',
                Phone: '347-475-0911',
                State: 'Canillo',
                ID: 'O-FAKE-0002'
              },
              {
                EntityName: 'SOMASUNDARAM  THIAGARAJAH, MD',
                Medicare: '367796',
                NetworkStatus: 'In-Network',
                NPI: '1225335482',
                ZipCode: '34613',
                VendorID: '',
                TaxID: '153215416',
                City: 'HOUSTON',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '11375 CORTEZ BLVD',
                Phone: '212-844-8300',
                State: 'Encamp',
                ID: 'O-FAKE-0003'
              },
              {
                EntityName: 'OLEG  KAIM, MDPC',
                Medicare: '367796',
                NetworkStatus: 'In-Network',
                NPI: '1225335482',
                ZipCode: '29485-8107',
                VendorID: '',
                TaxID: '153215416',
                City: 'SUMMERVILLE',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '298 MIDLAND PKWY',
                Phone: '212-555-1209',
                State: 'Escaldes-Engordany',
                ID: 'O-FAKE-0004'
              },
              {
                EntityName: 'SANDRA  WEISS-SCHWARTZ, MD',
                Medicare: '367796',
                NetworkStatus: 'In-Network',
                NPI: '1225335482',
                ZipCode: '10708',
                VendorID: '',
                TaxID: '153215416',
                City: 'BRONXVILLE',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '77 PONDFIELD RD',
                Phone: '313-155-3109',
                State: 'La Massana',
                ID: 'O-FAKE-0005'
              },
              {
                EntityName: 'EUGENE R FAILLACE, DC',
                Medicare: '367796',
                NetworkStatus: 'In-Network',
                NPI: '1225335482',
                ZipCode: '770155646',
                VendorID: '',
                TaxID: '153215416',
                City: 'HOUSTON',
                AddressLine2: 'BROOKSVILLE',
                AddressLine1: '12605 EAST FWY STE 365',
                Phone: '142-305-4376',
                State: 'Ordino',
                ID: 'O-FAKE-0006'
              }
            ]
          });
        } else if (dataView === 'D_HCPProviderProfessionalDetails') {
          resolve({
            Suffix: 'TAB',
            FirstName: 'Max',
            Sex: 'M',
            ProfessionalDetails: {
              ProviderLanguages: ['Afar'],
              DEA: ['368855-NY'],
              Medicare: '367796',
              Taxonomy: '363LF0000X',
              NPI: '1225335482',
              NetworkStatus: 'In-Network',
              UPIN: '294269',
              License: ['GP3936183', 'GP3936183'],
              Twitter: '',
              BirthState: 'TX',
              EndDate: '9999-12-31',
              BirthCountry: 'USA',
              LegacyProviderID: ['254234234234234', '254761-A88'],
              SSN: '153215416',
              ContactInformationCard: [
                {
                  AddressLine2: 'BROOKSVILLE',
                  AddressLine1: '11375 CORTEZ BLVD',
                  Email: 'bzbibi@yahoo.com provider email address',
                  PhoneList: ['212-305-3410'],
                  ZipCode: '770155646',
                  StateProvinceName: 'Andorra la Vella',
                  City: 'HOUSTON',
                  AddressType: 'TBD',
                  Fax: ''
                }
              ],
              LinkedIn: '',
              DoB: '1980-01-28',
              Alias: 'Max J',
              BirthCity: 'New York',
              MedicaidList: ['153213216-NY'],
              EffectiveFrom: '2022-01-01',
              Facebook: '',
              CAQHID: 'FP3936183'
            },
            pzLoadTime: 'August 23, 2023 8:07:19 PM UTC',
            pzPageNameHash: '_pa1317200811215500pz',
            Title: 'ACNP',
            Prefix: 'RX',
            ID: 'P-FAKE-0001',
            LastName: 'Smith',
            MiddleName: 'J'
          });
        } else if (dataView === 'D_HCPCredentialLandingDetails') {
          resolve({
            pzLoadTime: 'September 5, 2023 7:38:24 PM UTC',
            CredentialDetails: [
              {
                Specialty: 'OBGYN',
                CertificationName: 'American Board of Obstetrics and Gynecology',
                CertificationEndDate: '2029-05-20',
                CertificationStartDate: '2009-05-20',
                CertificationCode: '',
                MoreInfo: [
                  {
                    InternshipStartDate: '2022-01-31',
                    InternshipEndDate: '9999-12-31',
                    ResidencyStartDate: '2022-01-31',
                    ResidencyEndDate: '9999-12-31',
                    FellowshipStartDate: '2022-01-31',
                    FellowshipEndDate: '9999-12-31'
                  }
                ]
              },
              {
                Specialty: 'Retail Health Clinic',
                CertificationName: 'Path Anatomic/Clncl',
                CertificationEndDate: '9999-12-31',
                CertificationStartDate: '2022-01-31',
                CertificationCode: 'PAAC',
                MoreInfo: [
                  {
                    InternshipStartDate: '2022-01-31',
                    InternshipEndDate: '9999-12-31',
                    ResidencyStartDate: '2022-01-31',
                    ResidencyEndDate: '9999-12-31',
                    FellowshipStartDate: '2022-01-31',
                    FellowshipEndDate: '9999-12-31'
                  }
                ]
              }
            ],
            pzPageNameHash: '_pa125573288106387pz',
            ID: 'P-FAKE-0001'
          });
        } else if (dataView === 'D_HCPCredentialExpandedPage') {
          resolve({
            LicenseNo: 'TBD',
            Suffix: 'M',
            pzLoadTime: 'July 13, 2023 1:52:32 PM UTC',
            pzPageNameHash: '_pa1708651016011269pz',
            Title: 'LCSW',
            Gender: 'M',
            ID: 'P-0000-2D0V',
            CredentialsExpanded: {
              EducationalTraining: {
                Fellowship: {
                  Department: 'Lcsd Clnl Soc Wrkr',
                  FellowshipPeriod: ''
                },
                DegreeInfo: {
                  Address: '',
                  DegreeAwarded: '2016',
                  DegreePeriod: '',
                  Name: 'Fake Degree'
                },
                InternshipInfo: {
                  Department: 'Lcsd Clnl Soc Wrkr',
                  IntershipPeriod: ''
                },
                ResidentialInfo: {
                  Department: 'Lcsd Clnl Soc Wrkr',
                  ResidentialPeriod: ''
                }
              },
              BoardCertification: {
                CertificationPeriod: '',
                Certification: 'Lcsd Clnl Soc Wrkr  ( LCSW ) '
              },
              Award: {
                OrganizationName: 'test org',
                AwardDate: '2017',
                Name: 'tests'
              },
              Credentials: {
                Specialty: 'Lcsd Clnl Soc Wrkr',
                LicenseState: '',
                ProfessionalTraining: '',
                EffectivePeriod: '',
                DegreeName: '',
                DegreePeriod: '',
                EducationalInstitute: ''
              },
              HFCredentialDetails: {
                VerificationDateTime: '1970-01-01T00:00:00.000Z',
                CredentialsCheck: '',
                CredentialSpecialist: ''
              }
            },
            Name: 'M'
          });
        } else if (dataView === 'D_HCPFacilityAffiliations') {
          resolve({
            ProviderID: 'P-ABCD1234',
            Name: 'Mr.Rodney',
            Suffix: 'Jr',
            Title: 'MD',
            Gender: 'Male',
            License: '123124',
            HospitalAffilitions: [
              {
                FacilityId: 'F-0003-YDSB',
                FacilityName: 'CARDIOLOGY CENTER',
                OPCERT: '000012H',
                Address: '100 Church Street, New York. New York - 10006',
                StartDate: '01/01/2020',
                EndDate: '01/01/2021',
                TypeOfPrivileges: 'Full'
              },
              {
                FacilityId: 'F-0003-YDST',
                FacilityName: 'Beverly Hills Location1',
                OPCERT: '000012H',
                Address: '100 Church Street, New York. New York - 10006',
                StartDate: '01/01/2020',
                EndDate: '01/01/2021',
                TypeOfPrivileges: 'Full'
              },
              {
                FacilityId: 'F-0003-YDST',
                FacilityName: 'Beverly Hills Location2',
                OPCERT: '000012H',
                Address: '100 Church Street, New York. New York - 10006',
                StartDate: '01/01/2020',
                EndDate: '01/01/2021',
                TypeOfPrivileges: 'Full'
              },
              {
                FacilityId: 'F-0003-YDSB',
                FacilityName: 'Beverly Hills Location3',
                OPCERT: '000012H',
                Address: '100 Church Street, New York. New York - 10006',
                StartDate: '01/01/2020',
                EndDate: '01/01/2021',
                TypeOfPrivileges: 'Full'
              }
            ]
          });
        } else if (
          dataView === 'D_LookUpRefData' &&
          parameters.ReferenceRequest === 'HCPSpecialty'
        ) {
          resolve({
            ReferenceData: {
              ReferenceResponse: {
                HCPSpecialty: [
                  {
                    specialty_cd: 'LMSW',
                    specialty_nm: 'Lcsd Mstr Soc Wrkr'
                  },
                  {
                    specialty_cd: 'LCSW',
                    specialty_nm: 'Lcsd Clnl Soc Wrkr'
                  },
                  {
                    specialty_cd: 'PRICO',
                    specialty_nm: 'Puerto Rico Provider'
                  },
                  {
                    specialty_cd: 'APNAH',
                    specialty_nm: 'APN-Adult Health'
                  },
                  {
                    specialty_cd: 'APNCC',
                    specialty_nm: 'APN-Critical Care'
                  },
                  {
                    specialty_cd: 'APNCH',
                    specialty_nm: 'APN-Comm Health'
                  },
                  {
                    specialty_cd: 'APNER',
                    specialty_nm: 'APN-ER/Burns/Trauma'
                  },
                  {
                    specialty_cd: 'APNFH',
                    specialty_nm: 'APN-Family Health'
                  },
                  {
                    specialty_cd: 'APNGR',
                    specialty_nm: 'APN-Gerontological'
                  },
                  {
                    specialty_cd: 'APNMC',
                    specialty_nm: 'APN-Maternal/Child'
                  },
                  {
                    specialty_cd: 'APNMS',
                    specialty_nm: 'APN-Medical/Surgical'
                  },
                  {
                    specialty_cd: 'APNNE',
                    specialty_nm: 'APN-Neonatal'
                  },
                  {
                    specialty_cd: 'APNOB',
                    specialty_nm: 'APN-OB/Gyn'
                  },
                  {
                    specialty_cd: 'APNOC',
                    specialty_nm: 'APN-Oncology'
                  },
                  {
                    specialty_cd: 'APNPD',
                    specialty_nm: 'APN-Pediatric'
                  },
                  {
                    specialty_cd: 'APNPN',
                    specialty_nm: 'APN-Prenatal'
                  },
                  {
                    specialty_cd: 'APNRE',
                    specialty_nm: 'APN-Rehab'
                  },
                  {
                    specialty_cd: 'APNSL',
                    specialty_nm: 'APN-School'
                  },
                  {
                    specialty_cd: 'APNWH',
                    specialty_nm: 'APN-Womens Health'
                  },
                  {
                    specialty_cd: 'HRICO',
                    specialty_nm: 'Puerto Rico Hospital'
                  },
                  {
                    specialty_cd: 'LCAT',
                    specialty_nm: 'Lcsd Creat Arts Thrp'
                  },
                  {
                    specialty_cd: 'LMFT',
                    specialty_nm: 'Lcsd Marr/Fam Thrp'
                  },
                  {
                    specialty_cd: 'LMHC',
                    specialty_nm: 'Lcsd MH Counselor'
                  },
                  {
                    specialty_cd: '0142',
                    specialty_nm: 'Spinabifida Centers'
                  },
                  {
                    specialty_cd: '0143',
                    specialty_nm: 'Adult Scoliosis'
                  },
                  {
                    specialty_cd: '0145',
                    specialty_nm: 'Spinal Cord Injury'
                  },
                  {
                    specialty_cd: '0223',
                    specialty_nm: 'Hemophilia Trmt Cntr'
                  },
                  {
                    specialty_cd: '0226',
                    specialty_nm: 'Sickle Cell Disease'
                  },
                  {
                    specialty_cd: '0228',
                    specialty_nm: 'Proctology'
                  },
                  {
                    specialty_cd: '0376',
                    specialty_nm: 'NP Perinatal'
                  },
                  {
                    specialty_cd: '0420',
                    specialty_nm: 'Heterogeneous Group'
                  },
                  {
                    specialty_cd: '0440',
                    specialty_nm: 'Public Health'
                  },
                  {
                    specialty_cd: '0490',
                    specialty_nm: 'Misc (Admin Med)'
                  },
                  {
                    specialty_cd: '0816',
                    specialty_nm: 'AACAP'
                  },
                  {
                    specialty_cd: '0817',
                    specialty_nm: 'TBI Case Management'
                  },
                  {
                    specialty_cd: '0819',
                    specialty_nm: 'Adult Clinic CM'
                  },
                  {
                    specialty_cd: '0822',
                    specialty_nm: 'Adult Liaison Servic'
                  },
                  {
                    specialty_cd: '0823',
                    specialty_nm: 'Child Liaison Servic'
                  },
                  {
                    specialty_cd: '0830',
                    specialty_nm: 'Intensive Supervisio'
                  },
                  {
                    specialty_cd: '0831',
                    specialty_nm: 'ABC Waiver'
                  },
                  {
                    specialty_cd: '0864',
                    specialty_nm: 'TBI Respite Inpatien'
                  },
                  {
                    specialty_cd: '0870',
                    specialty_nm: 'All Other'
                  },
                  {
                    specialty_cd: '0871',
                    specialty_nm: 'Pediatric Tertiary C'
                  },
                  {
                    specialty_cd: '0872',
                    specialty_nm: 'Child Abuse Regional'
                  },
                  {
                    specialty_cd: '0873',
                    specialty_nm: 'Lead Poisoning Treat'
                  },
                  {
                    specialty_cd: '0875',
                    specialty_nm: 'Organ Transplant Ctr'
                  },
                  {
                    specialty_cd: '0881',
                    specialty_nm: 'Optical Appliance Pr'
                  },
                  {
                    specialty_cd: '0970',
                    specialty_nm: 'DOH Clinic'
                  },
                  {
                    specialty_cd: '0965',
                    specialty_nm: 'IC Birthing Center'
                  },
                  {
                    specialty_cd: '0960',
                    specialty_nm: 'IC - Cerebral Palsy'
                  },
                  {
                    specialty_cd: '0550',
                    specialty_nm: 'Ind Certf Orthotist'
                  },
                  {
                    specialty_cd: '0560',
                    specialty_nm: 'Ind Cert Prothetist'
                  },
                  {
                    specialty_cd: '0570',
                    specialty_nm: 'Ind Cert Prosth Orth'
                  },
                  {
                    specialty_cd: '0580',
                    specialty_nm: 'Ind Not in 550-570'
                  },
                  {
                    specialty_cd: '0645',
                    specialty_nm: 'Cleft Lip/Palate'
                  },
                  {
                    specialty_cd: '0740',
                    specialty_nm: 'Special Education'
                  },
                  {
                    specialty_cd: '0743',
                    specialty_nm: 'Autism and Atten Def'
                  },
                  {
                    specialty_cd: '0744',
                    specialty_nm: 'Cntr for Care W/PKU'
                  },
                  {
                    specialty_cd: '0750',
                    specialty_nm: 'Other Medical Care'
                  },
                  {
                    specialty_cd: '0762',
                    specialty_nm: 'TBI Day Program'
                  },
                  {
                    specialty_cd: '0770',
                    specialty_nm: 'MDC - Free Standing'
                  },
                  {
                    specialty_cd: '0780',
                    specialty_nm: 'MDC - Hospital'
                  },
                  {
                    specialty_cd: '0790',
                    specialty_nm: 'MDC - LTC-Based'
                  },
                  {
                    specialty_cd: '0813',
                    specialty_nm: 'Child Clinic Case Mg'
                  },
                  {
                    specialty_cd: '0814',
                    specialty_nm: 'Case Mgmt - Mdl Waiv'
                  },
                  {
                    specialty_cd: '0989',
                    specialty_nm: 'TBI Counseling'
                  },
                  {
                    specialty_cd: '0988',
                    specialty_nm: 'TBI Therapies'
                  },
                  {
                    specialty_cd: '0987',
                    specialty_nm: 'TBI Transportation'
                  },
                  {
                    specialty_cd: '0986',
                    specialty_nm: 'TBI Comm Res Service'
                  },
                  {
                    specialty_cd: '0985',
                    specialty_nm: 'TBI Behavior Program'
                  },
                  {
                    specialty_cd: '0984',
                    specialty_nm: 'TBI in Home Care'
                  },
                  {
                    specialty_cd: '0983',
                    specialty_nm: 'TBI Envir Modific'
                  },
                  {
                    specialty_cd: '0980',
                    specialty_nm: 'HH - CCPED/Home Care'
                  },
                  {
                    specialty_cd: 'ACUP',
                    specialty_nm: 'Acupuncture'
                  },
                  {
                    specialty_cd: 'ADME',
                    specialty_nm: 'Adolescent Medicine'
                  },
                  {
                    specialty_cd: 'ALIM',
                    specialty_nm: 'Allergy & Immunology'
                  },
                  {
                    specialty_cd: 'AMBM',
                    specialty_nm: 'Ambulatory Medicine'
                  },
                  {
                    specialty_cd: 'AMGY',
                    specialty_nm: 'Adolescent Med Gyn'
                  },
                  {
                    specialty_cd: 'AMLC',
                    specialty_nm: 'Ambulance'
                  },
                  {
                    specialty_cd: 'AMLT',
                    specialty_nm: 'Ambulette'
                  },
                  {
                    specialty_cd: 'ANCA',
                    specialty_nm: 'Anesthesia Cardiac'
                  },
                  {
                    specialty_cd: 'ANCC',
                    specialty_nm: 'Anest Critical Care'
                  },
                  {
                    specialty_cd: 'ANES',
                    specialty_nm: 'Anesthesiology'
                  },
                  {
                    specialty_cd: 'ANNE',
                    specialty_nm: 'Anesth Neurosurical'
                  },
                  {
                    specialty_cd: 'ANOB',
                    specialty_nm: 'Anesthesiology Ob'
                  },
                  {
                    specialty_cd: 'ANPM',
                    specialty_nm: 'Anesthesia Pain Mgmt'
                  },
                  {
                    specialty_cd: 'AUDI',
                    specialty_nm: 'Audiology'
                  },
                  {
                    specialty_cd: 'AUDS',
                    specialty_nm: 'Audiology Services'
                  },
                  {
                    specialty_cd: 'CAC',
                    specialty_nm: 'Certified Alchohol C'
                  },
                  {
                    specialty_cd: 'CAEP',
                    specialty_nm: 'Cardiac Electrophysi'
                  },
                  {
                    specialty_cd: 'CAGN',
                    specialty_nm: 'Cancer Genetics'
                  },
                  {
                    specialty_cd: 'CARD',
                    specialty_nm: 'Cardiovascular Disea'
                  },
                  {
                    specialty_cd: 'CARL',
                    specialty_nm: 'Cardiac Lab'
                  },
                  {
                    specialty_cd: 'CARM',
                    specialty_nm: 'Cardiac Monitoring'
                  },
                  {
                    specialty_cd: 'CBAC',
                    specialty_nm: 'Community Based Cac'
                  },
                  {
                    specialty_cd: 'CCME',
                    specialty_nm: 'Critical Care Med'
                  },
                  {
                    specialty_cd: 'CDAC',
                    specialty_nm: 'Cert Drug/Alc Counse'
                  },
                  {
                    specialty_cd: 'CDED',
                    specialty_nm: 'Certified Diabetic E'
                  },
                  {
                    specialty_cd: 'CGEN',
                    specialty_nm: 'Clinical Genetics'
                  },
                  {
                    specialty_cd: 'CHIR',
                    specialty_nm: 'Chiropractic'
                  },
                  {
                    specialty_cd: 'CNPH',
                    specialty_nm: 'Clncl Neurophysiolgy'
                  },
                  {
                    specialty_cd: 'COLP',
                    specialty_nm: 'Colposcopy'
                  },
                  {
                    specialty_cd: 'CORF',
                    specialty_nm: 'Comp Outpt Rehab Fac'
                  },
                  {
                    specialty_cd: 'CPSY',
                    specialty_nm: 'Child Psychiatry'
                  },
                  {
                    specialty_cd: 'CSAC',
                    specialty_nm: 'Certified Substance'
                  },
                  {
                    specialty_cd: 'CYFB',
                    specialty_nm: 'Cystic Fibrosis'
                  },
                  {
                    specialty_cd: 'DERM',
                    specialty_nm: 'Dermatology'
                  },
                  {
                    specialty_cd: 'DIAF',
                    specialty_nm: 'Dialysis Facilities'
                  },
                  {
                    specialty_cd: 'DLIM',
                    specialty_nm: 'Diagnostic Laborator'
                  },
                  {
                    specialty_cd: 'DMOP',
                    specialty_nm: 'DME/Orth & Prosth'
                  },
                  {
                    specialty_cd: 'DNAN',
                    specialty_nm: 'Dental Anesthesiolog'
                  },
                  {
                    specialty_cd: 'EDME',
                    specialty_nm: 'Endocr Diab/Metabol'
                  },
                  {
                    specialty_cd: 'EMED',
                    specialty_nm: 'Emergency Medicine'
                  },
                  {
                    specialty_cd: 'EPIL',
                    specialty_nm: 'Epilepsy'
                  },
                  {
                    specialty_cd: 'FPGY',
                    specialty_nm: 'Family Practice Gyn'
                  },
                  {
                    specialty_cd: 'FPLA',
                    specialty_nm: 'Family Planning'
                  },
                  {
                    specialty_cd: 'FPOB',
                    specialty_nm: 'Fam Practice OB/Gyn'
                  },
                  {
                    specialty_cd: 'FPOO',
                    specialty_nm: 'Family Pracitce/Obst'
                  },
                  {
                    specialty_cd: 'FPRA',
                    specialty_nm: 'Family Practice'
                  },
                  {
                    specialty_cd: 'FSLF',
                    specialty_nm: 'Free Standing Lab'
                  },
                  {
                    specialty_cd: 'FSRE',
                    specialty_nm: 'Free Stand Rehab Fac'
                  },
                  {
                    specialty_cd: 'FSRF',
                    specialty_nm: 'Free Stand Radiology'
                  },
                  {
                    specialty_cd: 'GAST',
                    specialty_nm: 'Gastroenterology'
                  },
                  {
                    specialty_cd: 'GEPR',
                    specialty_nm: 'General Practice'
                  },
                  {
                    specialty_cd: 'GERI',
                    specialty_nm: 'Geriatric Medicine'
                  },
                  {
                    specialty_cd: 'GNDN',
                    specialty_nm: 'General Dentistry'
                  },
                  {
                    specialty_cd: 'GYNE',
                    specialty_nm: 'Gynecology'
                  },
                  {
                    specialty_cd: 'GYON',
                    specialty_nm: 'Gynecologic Oncology'
                  },
                  {
                    specialty_cd: 'GYSU',
                    specialty_nm: 'Gynecologic Surgery'
                  },
                  {
                    specialty_cd: 'HADE',
                    specialty_nm: 'Hearing Aid Dispense'
                  },
                  {
                    specialty_cd: 'HEMA',
                    specialty_nm: 'Hematology'
                  },
                  {
                    specialty_cd: 'HEON',
                    specialty_nm: 'Hematology /Oncology'
                  },
                  {
                    specialty_cd: 'HEPA',
                    specialty_nm: 'Transplant Hepatolog'
                  },
                  {
                    specialty_cd: 'HHAG',
                    specialty_nm: 'Home Health Agencies'
                  },
                  {
                    specialty_cd: 'HOSP',
                    specialty_nm: 'Hospice'
                  },
                  {
                    specialty_cd: 'HSPL',
                    specialty_nm: 'Hospitalists'
                  },
                  {
                    specialty_cd: 'IMED',
                    specialty_nm: 'Internal Medicine'
                  },
                  {
                    specialty_cd: 'IMNU',
                    specialty_nm: 'Int Med, Nutrition'
                  },
                  {
                    specialty_cd: 'INFE',
                    specialty_nm: 'Infectious Disease'
                  },
                  {
                    specialty_cd: 'LARY',
                    specialty_nm: 'Laryngology'
                  },
                  {
                    specialty_cd: 'LIVY',
                    specialty_nm: 'Livery'
                  },
                  {
                    specialty_cd: 'MAFE',
                    specialty_nm: 'Maternal/Fetal Med'
                  },
                  {
                    specialty_cd: 'MDGN',
                    specialty_nm: 'Medical Genetics'
                  },
                  {
                    specialty_cd: 'MEPE',
                    specialty_nm: 'Medicine Pediatrics'
                  },
                  {
                    specialty_cd: 'MHSA',
                    specialty_nm: 'Mtl Hlth & Sub Abuse'
                  },
                  {
                    specialty_cd: 'MIDW',
                    specialty_nm: 'Midwifery'
                  },
                  {
                    specialty_cd: 'NEPH',
                    specialty_nm: 'Nephrology'
                  },
                  {
                    specialty_cd: 'NEUR',
                    specialty_nm: 'Neurology'
                  },
                  {
                    specialty_cd: 'NEUT',
                    specialty_nm: 'Neurotology'
                  },
                  {
                    specialty_cd: 'NMDI',
                    specialty_nm: 'Neuromuscular Diseas'
                  },
                  {
                    specialty_cd: 'NPAG',
                    specialty_nm: 'NP Adoles Med/Gyn'
                  },
                  {
                    specialty_cd: 'NPAH',
                    specialty_nm: 'NP Adult Health'
                  },
                  {
                    specialty_cd: 'NPAM',
                    specialty_nm: 'NP Adolescent Med'
                  },
                  {
                    specialty_cd: 'NPAN',
                    specialty_nm: 'Nurse Practitioner'
                  },
                  {
                    specialty_cd: 'NPFH',
                    specialty_nm: 'NP Family Health'
                  },
                  {
                    specialty_cd: 'NPGE',
                    specialty_nm: 'NP Gerontology'
                  },
                  {
                    specialty_cd: 'NPGY',
                    specialty_nm: 'Nurse Practitioner G'
                  },
                  {
                    specialty_cd: 'NPME',
                    specialty_nm: 'Neonat-Perinatal Med'
                  },
                  {
                    specialty_cd: 'NPOB',
                    specialty_nm: 'NP OB/Gyn'
                  },
                  {
                    specialty_cd: 'NPPE',
                    specialty_nm: 'NP Pediatrics'
                  },
                  {
                    specialty_cd: 'NPPS',
                    specialty_nm: 'NP Psychiatry'
                  },
                  {
                    specialty_cd: 'NPSY',
                    specialty_nm: 'Neuropsychology'
                  },
                  {
                    specialty_cd: 'NPWH',
                    specialty_nm: "NP Women'S Health"
                  },
                  {
                    specialty_cd: 'NUME',
                    specialty_nm: 'Nuclear Medicine'
                  },
                  {
                    specialty_cd: 'NURA',
                    specialty_nm: 'Nuclear Radiology'
                  },
                  {
                    specialty_cd: 'NUTR',
                    specialty_nm: 'Nutritionist'
                  },
                  {
                    specialty_cd: 'OBGY',
                    specialty_nm: 'Obstetrics & Gyn'
                  },
                  {
                    specialty_cd: 'OBHR',
                    specialty_nm: 'Obs & Gyn High Risk'
                  },
                  {
                    specialty_cd: 'OBST',
                    specialty_nm: 'Obstetrics'
                  },
                  {
                    specialty_cd: 'OCTH',
                    specialty_nm: 'Occupational Therapy'
                  },
                  {
                    specialty_cd: 'OMED',
                    specialty_nm: 'Occupational Med'
                  },
                  {
                    specialty_cd: 'ONCO',
                    specialty_nm: 'Oncology'
                  },
                  {
                    specialty_cd: 'OPHT',
                    specialty_nm: 'Ophthalmology'
                  },
                  {
                    specialty_cd: 'OPNO',
                    specialty_nm: 'Ophthalmology Neuro'
                  },
                  {
                    specialty_cd: 'OPRE',
                    specialty_nm: 'Ophth Rout Eye Exam'
                  },
                  {
                    specialty_cd: 'OPRV',
                    specialty_nm: 'Oph Retina/Vitreous'
                  },
                  {
                    specialty_cd: 'OPSC',
                    specialty_nm: 'Oph Surg/Dis Cornea'
                  },
                  {
                    specialty_cd: 'OPTO',
                    specialty_nm: 'Optometry'
                  },
                  {
                    specialty_cd: 'OROC',
                    specialty_nm: 'Orbital Suregery&Ocu'
                  },
                  {
                    specialty_cd: 'ORTH',
                    specialty_nm: 'Orthopedic Surgery'
                  },
                  {
                    specialty_cd: 'ORTO',
                    specialty_nm: 'Orthodontics'
                  },
                  {
                    specialty_cd: 'OSTE',
                    specialty_nm: 'Osteopathic Medicine'
                  },
                  {
                    specialty_cd: 'OTOL',
                    specialty_nm: 'Otolaryngology'
                  },
                  {
                    specialty_cd: 'OTTO',
                    specialty_nm: 'Otology'
                  },
                  {
                    specialty_cd: 'PAAC',
                    specialty_nm: 'Path Anatomic/Clncl'
                  },
                  {
                    specialty_cd: 'PAAN',
                    specialty_nm: 'Pathology Anatomic'
                  },
                  {
                    specialty_cd: 'PABB',
                    specialty_nm: 'Path Bl Bnk/Xfuse'
                  },
                  {
                    specialty_cd: 'PACH',
                    specialty_nm: 'Pathology Chemical'
                  },
                  {
                    specialty_cd: 'PACL',
                    specialty_nm: 'Pathology Clinical'
                  },
                  {
                    specialty_cd: 'PACY',
                    specialty_nm: 'Path Cytopathology'
                  },
                  {
                    specialty_cd: 'PADE',
                    specialty_nm: 'Path Dermatopath'
                  },
                  {
                    specialty_cd: 'PAFO',
                    specialty_nm: 'Pathology Forensic'
                  },
                  {
                    specialty_cd: 'PAHE',
                    specialty_nm: 'Path Hematology'
                  },
                  {
                    specialty_cd: 'PAIM',
                    specialty_nm: 'Path Immunopatho'
                  },
                  {
                    specialty_cd: 'PAMM',
                    specialty_nm: 'Path Med Microbio'
                  },
                  {
                    specialty_cd: 'PAMT',
                    specialty_nm: 'Path Med Toxicology'
                  },
                  {
                    specialty_cd: 'PANE',
                    specialty_nm: 'Path Neuropathology'
                  },
                  {
                    specialty_cd: 'PAOM',
                    specialty_nm: 'Pathology Oral Maxi'
                  },
                  {
                    specialty_cd: 'PAPE',
                    specialty_nm: 'Path Pediatric'
                  },
                  {
                    specialty_cd: 'PAPH',
                    specialty_nm: 'Path Public Health'
                  },
                  {
                    specialty_cd: 'PASP',
                    specialty_nm: 'Pathology Speech'
                  },
                  {
                    specialty_cd: 'PATH',
                    specialty_nm: 'Pathology'
                  },
                  {
                    specialty_cd: 'PCAR',
                    specialty_nm: 'Pediatric Cardiology'
                  },
                  {
                    specialty_cd: 'PEAI',
                    specialty_nm: 'Peds Allergy & Immu'
                  },
                  {
                    specialty_cd: 'PEAN',
                    specialty_nm: 'Peds Anesthesiology'
                  },
                  {
                    specialty_cd: 'PECC',
                    specialty_nm: 'Peds Critical Care'
                  },
                  {
                    specialty_cd: 'PECD',
                    specialty_nm: 'Peds Child Develop'
                  },
                  {
                    specialty_cd: 'PECF',
                    specialty_nm: 'Ped Cystic Fibrosis'
                  },
                  {
                    specialty_cd: 'PECS',
                    specialty_nm: 'Ped Cardiothor Surg'
                  },
                  {
                    specialty_cd: 'PEDA',
                    specialty_nm: 'Pediatric Ashtma'
                  },
                  {
                    specialty_cd: 'PEDE',
                    specialty_nm: 'Peds, Dermatology'
                  },
                  {
                    specialty_cd: 'PEDI',
                    specialty_nm: 'Pediatrics'
                  },
                  {
                    specialty_cd: 'PEDP',
                    specialty_nm: 'Peds Dev Psychiatry'
                  },
                  {
                    specialty_cd: 'PEEM',
                    specialty_nm: 'Peds Emergency Med'
                  },
                  {
                    specialty_cd: 'PEEN',
                    specialty_nm: 'Peds Endocrinology'
                  },
                  {
                    specialty_cd: 'PEGA',
                    specialty_nm: 'Ped Gastroenterolgy'
                  },
                  {
                    specialty_cd: 'PEGE',
                    specialty_nm: 'Pediatric Genetics'
                  },
                  {
                    specialty_cd: 'PEHO',
                    specialty_nm: 'Peds Hemat/Oncology'
                  },
                  {
                    specialty_cd: 'PEID',
                    specialty_nm: 'Peds Infect Disease'
                  },
                  {
                    specialty_cd: 'PENE',
                    specialty_nm: 'Pediatric Nephrology'
                  },
                  {
                    specialty_cd: 'PENS',
                    specialty_nm: 'Peds Neurosurgery'
                  },
                  {
                    specialty_cd: 'PEOP',
                    specialty_nm: 'Peds Ophthalmology'
                  },
                  {
                    specialty_cd: 'PEOR',
                    specialty_nm: 'Peds Ortho Surg'
                  },
                  {
                    specialty_cd: 'PEOT',
                    specialty_nm: 'Peds Otolaryngology'
                  },
                  {
                    specialty_cd: 'PEPU',
                    specialty_nm: 'Peds Pulmonology'
                  },
                  {
                    specialty_cd: 'PERH',
                    specialty_nm: 'Peds Rheumatology'
                  },
                  {
                    specialty_cd: 'PERM',
                    specialty_nm: 'Peds Rehab Med'
                  },
                  {
                    specialty_cd: 'PEST',
                    specialty_nm: 'Pediatric Strabismus'
                  },
                  {
                    specialty_cd: 'PESU',
                    specialty_nm: 'Pediatric Surgery'
                  },
                  {
                    specialty_cd: 'PETS',
                    specialty_nm: 'Peds Thoracic Surg'
                  },
                  {
                    specialty_cd: 'PEUR',
                    specialty_nm: 'Peds Urology'
                  },
                  {
                    specialty_cd: 'PHTH',
                    specialty_nm: 'Physical Therapy'
                  },
                  {
                    specialty_cd: 'PLSU',
                    specialty_nm: 'Plastic Surgery'
                  },
                  {
                    specialty_cd: 'PMRE',
                    specialty_nm: 'Phys Med & Rehab'
                  },
                  {
                    specialty_cd: 'SUGE',
                    specialty_nm: 'Surgery General'
                  },
                  {
                    specialty_cd: 'PNCS',
                    specialty_nm: 'Psy Nurse Clncl Spec'
                  },
                  {
                    specialty_cd: 'PNMT',
                    specialty_nm: 'Pain Medicine'
                  },
                  {
                    specialty_cd: 'PODI',
                    specialty_nm: 'Podiatry'
                  },
                  {
                    specialty_cd: 'POGY',
                    specialty_nm: 'Psychologist'
                  },
                  {
                    specialty_cd: 'PRAD',
                    specialty_nm: 'Pediatric Radiology'
                  },
                  {
                    specialty_cd: 'PRDN',
                    specialty_nm: 'Periodontics'
                  },
                  {
                    specialty_cd: 'PSAD',
                    specialty_nm: 'Psych Addictive Dis'
                  },
                  {
                    specialty_cd: 'PSCA',
                    specialty_nm: 'Child/Adol Psych'
                  },
                  {
                    specialty_cd: 'PSFO',
                    specialty_nm: 'Psychiatry Forensic'
                  },
                  {
                    specialty_cd: 'PSFR',
                    specialty_nm: 'Plast Surg Facial'
                  },
                  {
                    specialty_cd: 'PSGE',
                    specialty_nm: 'Psych Geriatric'
                  },
                  {
                    specialty_cd: 'PSHS',
                    specialty_nm: 'Plastic Surg Hand'
                  },
                  {
                    specialty_cd: 'PSYC',
                    specialty_nm: 'Psychiatrist'
                  },
                  {
                    specialty_cd: 'PTOT',
                    specialty_nm: 'Physical Therapy/Occ'
                  },
                  {
                    specialty_cd: 'PULM',
                    specialty_nm: 'Pulmonary Disease'
                  },
                  {
                    specialty_cd: 'RAAN',
                    specialty_nm: 'Rad Angiography'
                  },
                  {
                    specialty_cd: 'RACS',
                    specialty_nm: 'Radiology Cat Scan'
                  },
                  {
                    specialty_cd: 'RADI',
                    specialty_nm: 'Radiology'
                  },
                  {
                    specialty_cd: 'RAGA',
                    specialty_nm: 'Rad Gastrointestinal'
                  },
                  {
                    specialty_cd: 'RAIP',
                    specialty_nm: 'Rad Intervent Proc'
                  },
                  {
                    specialty_cd: 'RAMA',
                    specialty_nm: 'Rad Mammography'
                  },
                  {
                    specialty_cd: 'RAMR',
                    specialty_nm: 'Radiology MRI'
                  },
                  {
                    specialty_cd: 'RANE',
                    specialty_nm: 'Rad Neuroradiology'
                  },
                  {
                    specialty_cd: 'RAON',
                    specialty_nm: 'Radiation Oncology'
                  },
                  {
                    specialty_cd: 'RATH',
                    specialty_nm: 'Rad Therapeutic'
                  },
                  {
                    specialty_cd: 'RATM',
                    specialty_nm: 'Rad Tomography/MRI'
                  },
                  {
                    specialty_cd: 'RAUR',
                    specialty_nm: 'Rad Uroradiology'
                  },
                  {
                    specialty_cd: 'RAUS',
                    specialty_nm: 'Rad Ultra Sound'
                  },
                  {
                    specialty_cd: 'RDIA',
                    specialty_nm: 'Rad Diagnostic'
                  },
                  {
                    specialty_cd: 'REND',
                    specialty_nm: 'Repro Endocr/Infert'
                  },
                  {
                    specialty_cd: 'RHBF',
                    specialty_nm: 'Rehab Facility'
                  },
                  {
                    specialty_cd: 'RHEU',
                    specialty_nm: 'Rheumatology'
                  },
                  {
                    specialty_cd: 'SLDI',
                    specialty_nm: 'Sleep Disorders'
                  },
                  {
                    specialty_cd: 'SMED',
                    specialty_nm: 'Sports Medicine'
                  },
                  {
                    specialty_cd: 'SOWO',
                    specialty_nm: 'Social Worker'
                  },
                  {
                    specialty_cd: 'SPTH',
                    specialty_nm: 'Speech Therapy'
                  },
                  {
                    specialty_cd: 'SUBR',
                    specialty_nm: 'Surgery Breast'
                  },
                  {
                    specialty_cd: 'SUCR',
                    specialty_nm: 'Surg Colon & Rectal'
                  },
                  {
                    specialty_cd: 'SUCT',
                    specialty_nm: 'Surg Cardiothoracic'
                  },
                  {
                    specialty_cd: 'SUGC',
                    specialty_nm: 'Surg Craniofacial'
                  },
                  {
                    specialty_cd: 'SUGV',
                    specialty_nm: 'Surg Gen Vascular'
                  },
                  {
                    specialty_cd: 'SUHA',
                    specialty_nm: 'Surgery Hand'
                  },
                  {
                    specialty_cd: 'SUHN',
                    specialty_nm: 'Surg Head & Neck'
                  },
                  {
                    specialty_cd: 'SUHP',
                    specialty_nm: 'Surg Hep-Panc Bi'
                  },
                  {
                    specialty_cd: 'SULA',
                    specialty_nm: 'Surg Laparoscopic'
                  },
                  {
                    specialty_cd: 'SUMI',
                    specialty_nm: 'Surg Microsurgery'
                  },
                  {
                    specialty_cd: 'SUNE',
                    specialty_nm: 'Surgery Neurologica'
                  },
                  {
                    specialty_cd: 'SUOM',
                    specialty_nm: 'Surg Oral Maxillo'
                  },
                  {
                    specialty_cd: 'SUON',
                    specialty_nm: 'Surgery Oncology'
                  },
                  {
                    specialty_cd: 'SUOP',
                    specialty_nm: 'Surg Ocular Plastic'
                  },
                  {
                    specialty_cd: 'SURT',
                    specialty_nm: 'Surg Renal Xplant'
                  },
                  {
                    specialty_cd: 'SUTH',
                    specialty_nm: 'Surgery Thoracic'
                  },
                  {
                    specialty_cd: 'URGY',
                    specialty_nm: 'Urogynecology'
                  },
                  {
                    specialty_cd: 'UROL',
                    specialty_nm: 'Urology'
                  },
                  {
                    specialty_cd: 'URON',
                    specialty_nm: 'Urologic Oncology'
                  },
                  {
                    specialty_cd: '011',
                    specialty_nm: 'Hospital'
                  },
                  {
                    specialty_cd: '012',
                    specialty_nm: 'Skilled Nursing Fac'
                  },
                  {
                    specialty_cd: '015',
                    specialty_nm: 'Home Health Services'
                  },
                  {
                    specialty_cd: '017',
                    specialty_nm: 'OMH-Operatd Psych Ct'
                  },
                  {
                    specialty_cd: '018',
                    specialty_nm: 'Non-State Oper ASA'
                  },
                  {
                    specialty_cd: '200',
                    specialty_nm: 'Radiology'
                  },
                  {
                    specialty_cd: '307',
                    specialty_nm: 'DME(Not Orthot/Prost'
                  },
                  {
                    specialty_cd: '309',
                    specialty_nm: 'HIV Subst Svc Clinic'
                  },
                  {
                    specialty_cd: '315',
                    specialty_nm: 'Mntl Hlth Adult Clin'
                  },
                  {
                    specialty_cd: '316',
                    specialty_nm: 'Mntl Hlth Child Clin'
                  },
                  {
                    specialty_cd: '327',
                    specialty_nm: 'CBO'
                  },
                  {
                    specialty_cd: '365',
                    specialty_nm: 'MH-Residential'
                  },
                  {
                    specialty_cd: '375',
                    specialty_nm: 'MH-Outpatient'
                  },
                  {
                    specialty_cd: '599',
                    specialty_nm: 'Laboratories'
                  },
                  {
                    specialty_cd: '749',
                    specialty_nm: '749 ASA-Outpatient'
                  },
                  {
                    specialty_cd: '759',
                    specialty_nm: '759 ASA-Residential'
                  },
                  {
                    specialty_cd: '911',
                    specialty_nm: 'General Dentistry'
                  },
                  {
                    specialty_cd: '914',
                    specialty_nm: 'Gen Med - Hosp Clin'
                  },
                  {
                    specialty_cd: '924',
                    specialty_nm: 'CORF'
                  },
                  {
                    specialty_cd: '949',
                    specialty_nm: 'Alcohol Trmnt Progm'
                  },
                  {
                    specialty_cd: '970',
                    specialty_nm: 'Non Hosp Dme'
                  },
                  {
                    specialty_cd: '974',
                    specialty_nm: 'Mntl Hlth Clin-Trmt'
                  },
                  {
                    specialty_cd: '988',
                    specialty_nm: 'Comp Alcohol Care'
                  },
                  {
                    specialty_cd: '996',
                    specialty_nm: 'Hearing Services'
                  },
                  {
                    specialty_cd: '001',
                    specialty_nm: 'Hospital Inpatient'
                  },
                  {
                    specialty_cd: '007',
                    specialty_nm: 'ASA I/P Svc'
                  },
                  {
                    specialty_cd: '009',
                    specialty_nm: 'Othr Transprt Non-ER'
                  },
                  {
                    specialty_cd: '013',
                    specialty_nm: 'Pharm W/24hr Access'
                  },
                  {
                    specialty_cd: '014',
                    specialty_nm: 'Pharmacy'
                  },
                  {
                    specialty_cd: '016',
                    specialty_nm: 'Non-Instit. Hhc'
                  },
                  {
                    specialty_cd: '019',
                    specialty_nm: 'Transportation ER On'
                  },
                  {
                    specialty_cd: '020',
                    specialty_nm: 'Anesthesiology Servi'
                  },
                  {
                    specialty_cd: '073',
                    specialty_nm: 'Hospice Care'
                  },
                  {
                    specialty_cd: '131',
                    specialty_nm: 'Blood Banking'
                  },
                  {
                    specialty_cd: '135',
                    specialty_nm: 'Pathology Services'
                  },
                  {
                    specialty_cd: '250',
                    specialty_nm: 'Urgent Care Center'
                  },
                  {
                    specialty_cd: '281',
                    specialty_nm: 'Clinical Social Work'
                  },
                  {
                    specialty_cd: '282',
                    specialty_nm: 'Cert Drug & Alcohol'
                  },
                  {
                    specialty_cd: '283',
                    specialty_nm: 'Counseling Services'
                  },
                  {
                    specialty_cd: '300',
                    specialty_nm: 'Physical Therapy Ser'
                  },
                  {
                    specialty_cd: '301',
                    specialty_nm: 'Occupational Therapy'
                  },
                  {
                    specialty_cd: '302',
                    specialty_nm: 'Speech/Language Ther'
                  },
                  {
                    specialty_cd: '305',
                    specialty_nm: 'Mat & Ped HIV Ctr'
                  },
                  {
                    specialty_cd: '306',
                    specialty_nm: 'School Supportive He'
                  },
                  {
                    specialty_cd: '308',
                    specialty_nm: 'HIV PCP Clinic'
                  },
                  {
                    specialty_cd: '310',
                    specialty_nm: 'HIV PCP Medicaid'
                  },
                  {
                    specialty_cd: '311',
                    specialty_nm: 'Clinic Tx-Child/Yout'
                  },
                  {
                    specialty_cd: '312',
                    specialty_nm: 'Continuing Day Tx'
                  },
                  {
                    specialty_cd: '314',
                    specialty_nm: 'IPRT'
                  },
                  {
                    specialty_cd: '321',
                    specialty_nm: 'General Clinic Servi'
                  },
                  {
                    specialty_cd: '325',
                    specialty_nm: 'Cln Sp Cd Early Inte'
                  },
                  {
                    specialty_cd: '328',
                    specialty_nm: 'Famly Basd Tx-Child/'
                  },
                  {
                    specialty_cd: '329',
                    specialty_nm: 'Comm Residence-Adlt'
                  },
                  {
                    specialty_cd: '330',
                    specialty_nm: 'Comm Residence-Child'
                  },
                  {
                    specialty_cd: '355',
                    specialty_nm: 'Aids Center'
                  },
                  {
                    specialty_cd: '356',
                    specialty_nm: 'HCBS Waiver'
                  },
                  {
                    specialty_cd: '360',
                    specialty_nm: 'Family Care'
                  },
                  {
                    specialty_cd: '361',
                    specialty_nm: 'Crisis Residence'
                  },
                  {
                    specialty_cd: '362',
                    specialty_nm: 'RTF -Child/Youth'
                  },
                  {
                    specialty_cd: '370',
                    specialty_nm: 'Psychosocial Club'
                  },
                  {
                    specialty_cd: '371',
                    specialty_nm: 'Case Management'
                  },
                  {
                    specialty_cd: '372',
                    specialty_nm: 'Fss-Children/Youth'
                  },
                  {
                    specialty_cd: '373',
                    specialty_nm: 'Drop-In Center'
                  },
                  {
                    specialty_cd: '482',
                    specialty_nm: 'Hematology-General'
                  },
                  {
                    specialty_cd: '516',
                    specialty_nm: 'Endocrinology'
                  },
                  {
                    specialty_cd: '521',
                    specialty_nm: 'Blood PH And Gases'
                  },
                  {
                    specialty_cd: '524',
                    specialty_nm: 'Urinalysis'
                  },
                  {
                    specialty_cd: '611',
                    specialty_nm: 'Congregate Meals'
                  },
                  {
                    specialty_cd: '612',
                    specialty_nm: 'Social Day Care'
                  },
                  {
                    specialty_cd: '613',
                    specialty_nm: 'Personal Care'
                  },
                  {
                    specialty_cd: '614',
                    specialty_nm: 'Nursing Services'
                  },
                  {
                    specialty_cd: '615',
                    specialty_nm: 'PERS'
                  },
                  {
                    specialty_cd: '616',
                    specialty_nm: 'MH - Inpatient'
                  },
                  {
                    specialty_cd: '715',
                    specialty_nm: 'Optician Ctr, Optici'
                  },
                  {
                    specialty_cd: '716',
                    specialty_nm: 'Optometrist/Diagnost'
                  },
                  {
                    specialty_cd: '752',
                    specialty_nm: 'ASA I/P-Resident'
                  },
                  {
                    specialty_cd: '753',
                    specialty_nm: 'ASA I/P Rehab Svc'
                  },
                  {
                    specialty_cd: '754',
                    specialty_nm: 'ASA Med Monit Wdrw'
                  },
                  {
                    specialty_cd: '755',
                    specialty_nm: 'ASA O/P Wthdrwl'
                  },
                  {
                    specialty_cd: '756',
                    specialty_nm: 'ASA Intens/Enhan'
                  },
                  {
                    specialty_cd: '757',
                    specialty_nm: 'ASA Commun Rts'
                  },
                  {
                    specialty_cd: '758',
                    specialty_nm: 'ASA - SLS'
                  },
                  {
                    specialty_cd: '760',
                    specialty_nm: 'Clinic Pharmacy ER'
                  },
                  {
                    specialty_cd: '780',
                    specialty_nm: 'Clinical Psychology'
                  },
                  {
                    specialty_cd: '781',
                    specialty_nm: 'Social Work'
                  },
                  {
                    specialty_cd: '904',
                    specialty_nm: 'Obstetrics'
                  },
                  {
                    specialty_cd: '840',
                    specialty_nm: 'Respiratory Therapy'
                  },
                  {
                    specialty_cd: '902',
                    specialty_nm: 'Endocrine'
                  },
                  {
                    specialty_cd: '903',
                    specialty_nm: 'Diabetes'
                  },
                  {
                    specialty_cd: '905',
                    specialty_nm: 'Gynecology'
                  },
                  {
                    specialty_cd: '906',
                    specialty_nm: 'Family Planning'
                  },
                  {
                    specialty_cd: '907',
                    specialty_nm: 'Abortion'
                  },
                  {
                    specialty_cd: '908',
                    specialty_nm: 'CHAP'
                  },
                  {
                    specialty_cd: '909',
                    specialty_nm: 'Nutrition Program'
                  },
                  {
                    specialty_cd: '912',
                    specialty_nm: 'Orthodontic'
                  },
                  {
                    specialty_cd: '913',
                    specialty_nm: 'Hemodialysis'
                  },
                  {
                    specialty_cd: '915',
                    specialty_nm: 'Allergy'
                  },
                  {
                    specialty_cd: '916',
                    specialty_nm: 'Arthritis'
                  },
                  {
                    specialty_cd: '917',
                    specialty_nm: 'Rheumatology'
                  },
                  {
                    specialty_cd: '918',
                    specialty_nm: 'Podiatrist Center'
                  },
                  {
                    specialty_cd: '919',
                    specialty_nm: 'Eye/Vision Center'
                  },
                  {
                    specialty_cd: '922',
                    specialty_nm: 'ASA Methadone Tx'
                  },
                  {
                    specialty_cd: '925',
                    specialty_nm: 'Hypertension'
                  },
                  {
                    specialty_cd: '926',
                    specialty_nm: 'Hematology Center/Cl'
                  },
                  {
                    specialty_cd: '927',
                    specialty_nm: 'Cardiology Center'
                  },
                  {
                    specialty_cd: '928',
                    specialty_nm: 'Cardiovascular'
                  },
                  {
                    specialty_cd: '929',
                    specialty_nm: 'Pulmonary'
                  },
                  {
                    specialty_cd: '930',
                    specialty_nm: 'Gastroenterology'
                  },
                  {
                    specialty_cd: '931',
                    specialty_nm: 'Neurology Center'
                  },
                  {
                    specialty_cd: '932',
                    specialty_nm: 'Neurosurgery Clinic'
                  },
                  {
                    specialty_cd: '933',
                    specialty_nm: 'Cancer Detection Cen'
                  },
                  {
                    specialty_cd: '934',
                    specialty_nm: 'Oncology-Therapy (Ra'
                  },
                  {
                    specialty_cd: '935',
                    specialty_nm: 'ENT, Head & Neck Sur'
                  },
                  {
                    specialty_cd: '936',
                    specialty_nm: 'Pediatric General Me'
                  },
                  {
                    specialty_cd: '937',
                    specialty_nm: 'Pediatric Allergy'
                  },
                  {
                    specialty_cd: '938',
                    specialty_nm: 'Pediatric Neurology'
                  },
                  {
                    specialty_cd: '939',
                    specialty_nm: 'Pediatric Hematology'
                  },
                  {
                    specialty_cd: '940',
                    specialty_nm: 'Pediatric Cardiac'
                  },
                  {
                    specialty_cd: '941',
                    specialty_nm: 'Pediatric Renal'
                  },
                  {
                    specialty_cd: '942',
                    specialty_nm: 'Pediatric Pulmonary'
                  },
                  {
                    specialty_cd: '943',
                    specialty_nm: 'Pediatric Orthopaedi'
                  },
                  {
                    specialty_cd: '944',
                    specialty_nm: 'Pediatric Endocrine'
                  },
                  {
                    specialty_cd: '946',
                    specialty_nm: 'Psychiatry - Group'
                  },
                  {
                    specialty_cd: '950',
                    specialty_nm: 'Orthopedic Clinic/Ce'
                  },
                  {
                    specialty_cd: '951',
                    specialty_nm: 'Surgical - Minor'
                  },
                  {
                    specialty_cd: '952',
                    specialty_nm: 'Surgical - General'
                  },
                  {
                    specialty_cd: '953',
                    specialty_nm: 'Urology'
                  },
                  {
                    specialty_cd: '954',
                    specialty_nm: 'Nephrology'
                  },
                  {
                    specialty_cd: '955',
                    specialty_nm: 'Genito-Urinary'
                  },
                  {
                    specialty_cd: '956',
                    specialty_nm: 'Dermatology Center/C'
                  },
                  {
                    specialty_cd: '958',
                    specialty_nm: 'Ophthalmology Center'
                  },
                  {
                    specialty_cd: '960',
                    specialty_nm: 'Pediatric Dermatolog'
                  },
                  {
                    specialty_cd: '961',
                    specialty_nm: 'Pediatric Diabetes'
                  },
                  {
                    specialty_cd: '962',
                    specialty_nm: 'Pediatric Surgery'
                  },
                  {
                    specialty_cd: '963',
                    specialty_nm: 'Child Psychiatry'
                  },
                  {
                    specialty_cd: '964',
                    specialty_nm: 'Psychiatry - General'
                  },
                  {
                    specialty_cd: '965',
                    specialty_nm: 'Tuberculosis'
                  },
                  {
                    specialty_cd: '966',
                    specialty_nm: 'Infectious Disease'
                  },
                  {
                    specialty_cd: '967',
                    specialty_nm: 'PHC Speech And Heari'
                  },
                  {
                    specialty_cd: '969',
                    specialty_nm: 'Ho Vendor-DME Orthot'
                  },
                  {
                    specialty_cd: '975',
                    specialty_nm: 'Day Tx - Child/Youth'
                  },
                  {
                    specialty_cd: '979',
                    specialty_nm: 'MR/DD Clinic Treatme'
                  },
                  {
                    specialty_cd: '983',
                    specialty_nm: 'Spec Clinic- Mr'
                  },
                  {
                    specialty_cd: '640',
                    specialty_nm: 'Audiologist'
                  },
                  {
                    specialty_cd: '984',
                    specialty_nm: 'ASA OP Clinic Svc'
                  },
                  {
                    specialty_cd: '987',
                    specialty_nm: 'ASA OP Rehab Svc'
                  },
                  {
                    specialty_cd: '989',
                    specialty_nm: 'ASA Mgd Detox'
                  },
                  {
                    specialty_cd: '992',
                    specialty_nm: 'Comp Psych ER Prog'
                  },
                  {
                    specialty_cd: '993',
                    specialty_nm: 'Amsurg-Hosp & Frees'
                  },
                  {
                    specialty_cd: '997',
                    specialty_nm: 'Audiology Svc Ctr'
                  },
                  {
                    specialty_cd: 'DHOS',
                    specialty_nm: 'Dummy Hospital Code'
                  },
                  {
                    specialty_cd: 'HIVS',
                    specialty_nm: 'HIV Specialist'
                  },
                  {
                    specialty_cd: 'NPNE',
                    specialty_nm: 'NP Neonatology'
                  },
                  {
                    specialty_cd: 'RESP',
                    specialty_nm: 'Respiratory Therapy'
                  },
                  {
                    specialty_cd: 'NPWC',
                    specialty_nm: 'NP Wound Care'
                  },
                  {
                    specialty_cd: 'NPAC',
                    specialty_nm: 'NP Acute Care'
                  },
                  {
                    specialty_cd: 'PSYA',
                    specialty_nm: 'Psychoanalysis'
                  },
                  {
                    specialty_cd: 'NPPC',
                    specialty_nm: 'NP Palliative Care'
                  },
                  {
                    specialty_cd: 'NUCA',
                    specialty_nm: 'Nuclear Cardiology'
                  },
                  {
                    specialty_cd: 'DVDC',
                    specialty_nm: 'Develomental Disabil'
                  },
                  {
                    specialty_cd: 'REIC',
                    specialty_nm: 'Regional Early Inter'
                  },
                  {
                    specialty_cd: 'CEVC',
                    specialty_nm: 'Child Evaluation Cen'
                  },
                  {
                    specialty_cd: 'NDIS',
                    specialty_nm: 'Neurodvlptmtl Disabl'
                  },
                  {
                    specialty_cd: 'POEM',
                    specialty_nm: 'Prev Med/Occ Env Med'
                  },
                  {
                    specialty_cd: 'HPLM',
                    specialty_nm: 'Hos and Paliativ Med'
                  },
                  {
                    specialty_cd: 'OCTA',
                    specialty_nm: 'Occupational Therapy'
                  },
                  {
                    specialty_cd: 'PHTA',
                    specialty_nm: 'PT Assistant'
                  },
                  {
                    specialty_cd: 'NPHN',
                    specialty_nm: 'NP Holistic Nursing'
                  },
                  {
                    specialty_cd: 'NPER',
                    specialty_nm: 'NP Perinatology'
                  },
                  {
                    specialty_cd: 'NNEO',
                    specialty_nm: 'NP Neonatology'
                  },
                  {
                    specialty_cd: 'ONLW',
                    specialty_nm: 'OON Lab Waiver'
                  },
                  {
                    specialty_cd: 'PHSPW',
                    specialty_nm: 'PHSP OON Lab Waiver'
                  },
                  {
                    specialty_cd: 'INTC',
                    specialty_nm: 'Interventional Cardi'
                  },
                  {
                    specialty_cd: 'APNPM',
                    specialty_nm: 'APN-Psych/MH'
                  },
                  {
                    specialty_cd: 'ONCSP',
                    specialty_nm: 'Oncology - NP'
                  },
                  {
                    specialty_cd: 'UNHY',
                    specialty_nm: 'Undersea/Hyperbaric'
                  },
                  {
                    specialty_cd: 'VAMD',
                    specialty_nm: 'Vascular Medicine'
                  },
                  {
                    specialty_cd: '000',
                    specialty_nm: 'Unknown'
                  },
                  {
                    specialty_cd: 'CMGN',
                    specialty_nm: 'Clinical Mol Genetic'
                  },
                  {
                    specialty_cd: 'CRNA',
                    specialty_nm: 'Cert RN Anesth'
                  },
                  {
                    specialty_cd: 'SLEE',
                    specialty_nm: 'Sleep Centers'
                  },
                  {
                    specialty_cd: '87A',
                    specialty_nm: 'Org Transplant-Liver'
                  },
                  {
                    specialty_cd: '87B',
                    specialty_nm: 'Org Transplant-Lung'
                  },
                  {
                    specialty_cd: '87C',
                    specialty_nm: 'Org Transplant-Heart'
                  },
                  {
                    specialty_cd: '87D',
                    specialty_nm: 'Org Trans-Heart/Lung'
                  },
                  {
                    specialty_cd: '87E',
                    specialty_nm: 'Org Trans-Pancreas'
                  },
                  {
                    specialty_cd: '87F',
                    specialty_nm: 'Org Trans-Kidney'
                  },
                  {
                    specialty_cd: '87G',
                    specialty_nm: 'Org Trans-Cornea'
                  },
                  {
                    specialty_cd: '87H',
                    specialty_nm: 'Org Trans-Intestine'
                  },
                  {
                    specialty_cd: '87I',
                    specialty_nm: 'Org Trans-Bone Mrrow'
                  },
                  {
                    specialty_cd: 'SLMD',
                    specialty_nm: 'Sleep Medicine'
                  },
                  {
                    specialty_cd: 'NPON',
                    specialty_nm: 'Nurse Pract-Oncology'
                  },
                  {
                    specialty_cd: 'PECA',
                    specialty_nm: 'Child Abuse Pediatri'
                  },
                  {
                    specialty_cd: 'PEDR',
                    specialty_nm: 'Pedorthist'
                  },
                  {
                    specialty_cd: 'VSNU',
                    specialty_nm: 'Vascular Neurology'
                  },
                  {
                    specialty_cd: 'SRCC',
                    specialty_nm: 'Surgery-Critical Car'
                  },
                  {
                    specialty_cd: 'CYTO',
                    specialty_nm: 'Clinical Cytogenetic'
                  },
                  {
                    specialty_cd: 'CNUR',
                    specialty_nm: 'Child Neurology'
                  },
                  {
                    specialty_cd: 'HMKR',
                    specialty_nm: 'Homemaker'
                  },
                  {
                    specialty_cd: 'DRSP',
                    specialty_nm: 'DME - Respiratory'
                  },
                  {
                    specialty_cd: 'ADHC',
                    specialty_nm: 'Adult Day HC'
                  },
                  {
                    specialty_cd: 'DBAR',
                    specialty_nm: 'Bariatric DME'
                  },
                  {
                    specialty_cd: 'CENA',
                    specialty_nm: 'Cert Nurse Asst'
                  },
                  {
                    specialty_cd: 'CURE',
                    specialty_nm: 'Cust Rehab Equip'
                  },
                  {
                    specialty_cd: 'ESCO',
                    specialty_nm: 'Escort'
                  },
                  {
                    specialty_cd: 'HVDH',
                    specialty_nm: 'Heavy Duty Housekeep'
                  },
                  {
                    specialty_cd: 'HMHA',
                    specialty_nm: 'Home Health Aide'
                  },
                  {
                    specialty_cd: 'HMDM',
                    specialty_nm: 'Home Delivered Meals'
                  },
                  {
                    specialty_cd: 'HMRI',
                    specialty_nm: 'Home Repair & Instal'
                  },
                  {
                    specialty_cd: 'HOUS',
                    specialty_nm: 'Housekeeping'
                  },
                  {
                    specialty_cd: 'OPLV',
                    specialty_nm: 'Low Vision Optometry'
                  },
                  {
                    specialty_cd: 'MESP',
                    specialty_nm: 'Medical Supplies'
                  },
                  {
                    specialty_cd: 'MFVU',
                    specialty_nm: 'Moving Furniture'
                  },
                  {
                    specialty_cd: 'ORPR',
                    specialty_nm: 'Orthotics And Prosth'
                  },
                  {
                    specialty_cd: 'PCRA',
                    specialty_nm: 'Personal Care Asst'
                  },
                  {
                    specialty_cd: 'PERS',
                    specialty_nm: 'Pers Emr Resp Sys'
                  },
                  {
                    specialty_cd: 'SODC',
                    specialty_nm: 'Social Day Care'
                  },
                  {
                    specialty_cd: 'PSTS',
                    specialty_nm: 'Pest Control Svc'
                  },
                  {
                    specialty_cd: 'SOES',
                    specialty_nm: 'Social Envir Support'
                  },
                  {
                    specialty_cd: 'MVFU',
                    specialty_nm: 'Moving Furniture'
                  },
                  {
                    specialty_cd: 'PHAS',
                    specialty_nm: 'Physician Assistant'
                  },
                  {
                    specialty_cd: 'ANSS',
                    specialty_nm: 'Anesthesia Services'
                  },
                  {
                    specialty_cd: 'DVBP',
                    specialty_nm: 'Dev Behav Pediatrics'
                  },
                  {
                    specialty_cd: '0510',
                    specialty_nm: 'Certified Orthotist'
                  },
                  {
                    specialty_cd: '0520',
                    specialty_nm: 'Cert Prosthetist'
                  },
                  {
                    specialty_cd: '0530',
                    specialty_nm: 'Prosthetist/Ortho'
                  },
                  {
                    specialty_cd: '0540',
                    specialty_nm: 'Medical Supply Co.'
                  },
                  {
                    specialty_cd: '0545',
                    specialty_nm: 'Durable Med Equip'
                  },
                  {
                    specialty_cd: '0531',
                    specialty_nm: 'Pedorthist'
                  },
                  {
                    specialty_cd: 'PHEP',
                    specialty_nm: 'Pediatric Trans Hept'
                  },
                  {
                    specialty_cd: '0760',
                    specialty_nm: 'Adult Day Care'
                  },
                  {
                    specialty_cd: '0720',
                    specialty_nm: 'Per Cre Asst-Age-Dis'
                  },
                  {
                    specialty_cd: 'VIRA',
                    specialty_nm: 'Vasc & Intervnt Radi'
                  },
                  {
                    specialty_cd: 'CASU',
                    specialty_nm: 'Cardiovasc Surgery'
                  },
                  {
                    specialty_cd: 'NDPE',
                    specialty_nm: 'Neurodev Disabl Peds'
                  },
                  {
                    specialty_cd: '672',
                    specialty_nm: 'Lvl 1Homemaker'
                  },
                  {
                    specialty_cd: '673',
                    specialty_nm: 'Lev 2 Pers Care'
                  },
                  {
                    specialty_cd: '665',
                    specialty_nm: 'Cert Home Health'
                  },
                  {
                    specialty_cd: '668',
                    specialty_nm: 'Licensed Home Health'
                  },
                  {
                    specialty_cd: '50A',
                    specialty_nm: 'Clinic Pharmacy'
                  },
                  {
                    specialty_cd: '50B',
                    specialty_nm: 'Comm/Retail Pharm'
                  },
                  {
                    specialty_cd: '50C',
                    specialty_nm: 'Compounding Pharmacy'
                  },
                  {
                    specialty_cd: '50D',
                    specialty_nm: 'Home Inf Thera Pharm'
                  },
                  {
                    specialty_cd: '50E',
                    specialty_nm: 'Institutional Pharm'
                  },
                  {
                    specialty_cd: '50F',
                    specialty_nm: 'Long Term Care Pharm'
                  },
                  {
                    specialty_cd: '50G',
                    specialty_nm: 'Mail Order Pharmacy'
                  },
                  {
                    specialty_cd: '50H',
                    specialty_nm: 'Mgd Care Org Pharm'
                  },
                  {
                    specialty_cd: '50I',
                    specialty_nm: 'Nuclear Pharmacy'
                  },
                  {
                    specialty_cd: '50J',
                    specialty_nm: 'Specialty Pharmacy'
                  },
                  {
                    specialty_cd: '54A',
                    specialty_nm: 'Customized Equipment'
                  },
                  {
                    specialty_cd: '54B',
                    specialty_nm: 'Dialy Equip & Supls'
                  },
                  {
                    specialty_cd: '54C',
                    specialty_nm: 'Nursing Fac Supplies'
                  },
                  {
                    specialty_cd: '54D',
                    specialty_nm: 'Oxygen Equip Supplie'
                  },
                  {
                    specialty_cd: '54E',
                    specialty_nm: 'Parent/Enteral Nutri'
                  },
                  {
                    specialty_cd: '667',
                    specialty_nm: 'Home Delv/Cong Meals'
                  },
                  {
                    specialty_cd: '661',
                    specialty_nm: 'Soc And Envm Suppt'
                  },
                  {
                    specialty_cd: '671',
                    specialty_nm: 'Non Emer Transp'
                  },
                  {
                    specialty_cd: '664',
                    specialty_nm: 'Adult Day H Care'
                  },
                  {
                    specialty_cd: '662',
                    specialty_nm: 'Social Day Care'
                  },
                  {
                    specialty_cd: 'PACA',
                    specialty_nm: 'Palliative Care'
                  },
                  {
                    specialty_cd: 'METX',
                    specialty_nm: 'Medical Toxicology'
                  },
                  {
                    specialty_cd: '674',
                    specialty_nm: 'Respiratory Therapy'
                  },
                  {
                    specialty_cd: '680',
                    specialty_nm: 'Private Duty Nursing'
                  },
                  {
                    specialty_cd: '663',
                    specialty_nm: 'Nursing Home Care'
                  },
                  {
                    specialty_cd: '762',
                    specialty_nm: 'Home Care Services A'
                  },
                  {
                    specialty_cd: 'PAMG',
                    specialty_nm: 'Path Molec Gen'
                  },
                  {
                    specialty_cd: '129',
                    specialty_nm: 'Home Infusion Agency'
                  },
                  {
                    specialty_cd: '675',
                    specialty_nm: 'CD Personal Asst Lv1'
                  },
                  {
                    specialty_cd: '676',
                    specialty_nm: 'CD Personal Asst Lv2'
                  },
                  {
                    specialty_cd: 'CATH',
                    specialty_nm: 'Creative Arts Ther'
                  },
                  {
                    specialty_cd: 'PUPM',
                    specialty_nm: 'Pub H & Gen Prev Med'
                  },
                  {
                    specialty_cd: 'PSSO',
                    specialty_nm: 'Psychosomatic Med'
                  },
                  {
                    specialty_cd: 'CBGE',
                    specialty_nm: 'Clncl Bio Genetics'
                  },
                  {
                    specialty_cd: 'PSTE',
                    specialty_nm: 'Psych Test'
                  },
                  {
                    specialty_cd: 'NEPT',
                    specialty_nm: 'Neuro Psych Test'
                  },
                  {
                    specialty_cd: 'AUTM',
                    specialty_nm: 'Autism'
                  },
                  {
                    specialty_cd: 'PSDI',
                    specialty_nm: 'Psych Disord'
                  },
                  {
                    specialty_cd: 'CRME',
                    specialty_nm: 'Crisis Manag'
                  },
                  {
                    specialty_cd: 'HODI',
                    specialty_nm: 'Hord Disord'
                  },
                  {
                    specialty_cd: 'EADI',
                    specialty_nm: 'Eat Disord'
                  },
                  {
                    specialty_cd: 'DEPR',
                    specialty_nm: 'Depression'
                  },
                  {
                    specialty_cd: 'ALZD',
                    specialty_nm: 'Alzeim Disease'
                  },
                  {
                    specialty_cd: 'PUPS',
                    specialty_nm: 'Publ Psych'
                  },
                  {
                    specialty_cd: 'DIPS',
                    specialty_nm: 'Disaster Psych'
                  },
                  {
                    specialty_cd: 'ANDI',
                    specialty_nm: 'Anx Disord'
                  },
                  {
                    specialty_cd: 'DIBT',
                    specialty_nm: 'Dial Beh Thr'
                  },
                  {
                    specialty_cd: 'PTSD',
                    specialty_nm: 'PTSD'
                  },
                  {
                    specialty_cd: 'ADPS',
                    specialty_nm: 'Addic Psych'
                  },
                  {
                    specialty_cd: 'AHTC',
                    specialty_nm: 'Adv Heart Fail And T'
                  },
                  {
                    specialty_cd: 'POSU',
                    specialty_nm: 'Podiatric Surgery'
                  },
                  {
                    specialty_cd: 'SCIM',
                    specialty_nm: 'Spinal Cord Inj Med'
                  },
                  {
                    specialty_cd: 'MISMS',
                    specialty_nm: 'Multisp Group'
                  },
                  {
                    specialty_cd: 'CHPS',
                    specialty_nm: 'Chld Psych'
                  },
                  {
                    specialty_cd: 'FOPS',
                    specialty_nm: 'Forst Psych'
                  },
                  {
                    specialty_cd: 'UCDO',
                    specialty_nm: 'Obses Comp Disord'
                  },
                  {
                    specialty_cd: 'BH001',
                    specialty_nm: 'LOC IP Child BH001'
                  },
                  {
                    specialty_cd: 'BH002',
                    specialty_nm: 'LOC IP Adol BH002'
                  },
                  {
                    specialty_cd: 'BH03',
                    specialty_nm: 'LOC IP Adlt BH03'
                  },
                  {
                    specialty_cd: 'BH04',
                    specialty_nm: 'LOC IP Ger BH04'
                  },
                  {
                    specialty_cd: 'BH05',
                    specialty_nm: 'LOC Detox BH05'
                  },
                  {
                    specialty_cd: 'BH06',
                    specialty_nm: 'LOC S/A Rehab BH06'
                  },
                  {
                    specialty_cd: 'BH07',
                    specialty_nm: 'LOC Eat Dis Pgm BH07'
                  },
                  {
                    specialty_cd: 'BH08',
                    specialty_nm: 'LOC Cmppsyc Er BH08'
                  },
                  {
                    specialty_cd: 'BH09',
                    specialty_nm: 'LOC Par Hosp BH09'
                  },
                  {
                    specialty_cd: 'BH10',
                    specialty_nm: 'LOC Intsv Op Tmt BH1'
                  },
                  {
                    specialty_cd: 'BH11',
                    specialty_nm: 'LOC Day Trmt BH11'
                  },
                  {
                    specialty_cd: 'BH12',
                    specialty_nm: 'LOC Cntdytrmt BH12'
                  },
                  {
                    specialty_cd: 'BH13',
                    specialty_nm: 'LOC Amb Detox BH13'
                  },
                  {
                    specialty_cd: 'BH14',
                    specialty_nm: 'LOC Met Main BH14'
                  },
                  {
                    specialty_cd: 'BH15',
                    specialty_nm: 'LOC Crismbl Svc BH15'
                  },
                  {
                    specialty_cd: 'BH16',
                    specialty_nm: 'LOC Pros BH16'
                  },
                  {
                    specialty_cd: 'BH17',
                    specialty_nm: 'LOC Iprt BH17'
                  },
                  {
                    specialty_cd: 'BH18',
                    specialty_nm: 'LOC Ect BH18'
                  },
                  {
                    specialty_cd: 'BH19',
                    specialty_nm: 'LOC Act BH19'
                  },
                  {
                    specialty_cd: 'BH20',
                    specialty_nm: 'LOC Resid Svc BH20'
                  },
                  {
                    specialty_cd: 'BH21',
                    specialty_nm: 'LOC Sdp BH21'
                  },
                  {
                    specialty_cd: 'BH23',
                    specialty_nm: 'LOC Omh Lic Cr BH23'
                  },
                  {
                    specialty_cd: 'BH22',
                    specialty_nm: 'LOC Pbis BH22'
                  },
                  {
                    specialty_cd: '600',
                    specialty_nm: 'Physiology Lab'
                  },
                  {
                    specialty_cd: 'CASE',
                    specialty_nm: 'Cert Asth Educ'
                  },
                  {
                    specialty_cd: 'FPEM',
                    specialty_nm: 'Fem Pelv Med & Rec S'
                  },
                  {
                    specialty_cd: 'REDI',
                    specialty_nm: 'Reg Dietic'
                  },
                  {
                    specialty_cd: 'MECO',
                    specialty_nm: 'Mental Hlth Cons'
                  },
                  {
                    specialty_cd: 'CCSU',
                    specialty_nm: 'Cong Card Surg'
                  },
                  {
                    specialty_cd: 'DEME',
                    specialty_nm: 'Dent Sleep Med'
                  },
                  {
                    specialty_cd: 'PESM',
                    specialty_nm: 'Peds Sleep Med'
                  },
                  {
                    specialty_cd: 'NMOM',
                    specialty_nm: 'Neuro & Osteo Manip'
                  },
                  {
                    specialty_cd: 'IDTF',
                    specialty_nm: 'Diagnostic Testing'
                  },
                  {
                    specialty_cd: 'CCAP',
                    specialty_nm: 'Clin Ch & Adol Psych'
                  },
                  {
                    specialty_cd: 'PHAR',
                    specialty_nm: 'Pharmacist'
                  },
                  {
                    specialty_cd: 'MSRA',
                    specialty_nm: 'Musculoskeletal Rad'
                  },
                  {
                    specialty_cd: '666',
                    specialty_nm: 'Assisted Living'
                  },
                  {
                    specialty_cd: 'OSME',
                    specialty_nm: 'Ortho Sports Med'
                  },
                  {
                    specialty_cd: 'LACT',
                    specialty_nm: 'Lactation'
                  },
                  {
                    specialty_cd: '817',
                    specialty_nm: 'Assistive Technology'
                  },
                  {
                    specialty_cd: '819',
                    specialty_nm: 'Community Transition'
                  },
                  {
                    specialty_cd: '820',
                    specialty_nm: 'Environmental Mods'
                  },
                  {
                    specialty_cd: '825',
                    specialty_nm: 'Moving Assistance'
                  },
                  {
                    specialty_cd: '833',
                    specialty_nm: 'Telehealth'
                  },
                  {
                    specialty_cd: 'HEHO',
                    specialty_nm: 'Health Home'
                  },
                  {
                    specialty_cd: 'CMA',
                    specialty_nm: 'Care Mgmt Agency'
                  },
                  {
                    specialty_cd: 'SAOR',
                    specialty_nm: 'Spec Assist Ortho'
                  },
                  {
                    specialty_cd: 'SAAC',
                    specialty_nm: 'Spec Assist Acupn'
                  },
                  {
                    specialty_cd: 'SARA',
                    specialty_nm: 'Spec Asst Radiology'
                  },
                  {
                    specialty_cd: 'SAUR',
                    specialty_nm: 'Spec Assist Urology'
                  },
                  {
                    specialty_cd: 'NPCO',
                    specialty_nm: 'NP Comm Health'
                  },
                  {
                    specialty_cd: 'NPCL',
                    specialty_nm: 'NP College Health'
                  },
                  {
                    specialty_cd: 'NPSH',
                    specialty_nm: 'NP School Health'
                  },
                  {
                    specialty_cd: 'ADDM',
                    specialty_nm: 'Addiction Med'
                  },
                  {
                    specialty_cd: 'PERA',
                    specialty_nm: 'Peds Rad'
                  },
                  {
                    specialty_cd: 'TELA',
                    specialty_nm: 'Teladoc Provider'
                  },
                  {
                    specialty_cd: 'ONHCO',
                    specialty_nm: 'OON HCO'
                  },
                  {
                    specialty_cd: 'ONHCP',
                    specialty_nm: 'OON HCP'
                  },
                  {
                    specialty_cd: 'CGSO',
                    specialty_nm: 'Complex Gen Surg Onc'
                  },
                  {
                    specialty_cd: 'NEON',
                    specialty_nm: 'Neur Sp Qlt Ch Neur'
                  },
                  {
                    specialty_cd: 'FORG',
                    specialty_nm: 'Foreign Provider'
                  },
                  {
                    specialty_cd: 'SOLE',
                    specialty_nm: 'Solera Vendor Only'
                  },
                  {
                    specialty_cd: 'DOUL',
                    specialty_nm: 'Doula'
                  },
                  {
                    specialty_cd: 'WOUN',
                    specialty_nm: 'Wound Tech'
                  },
                  {
                    specialty_cd: 'CPAP',
                    specialty_nm: 'Compl Family Plan'
                  },
                  {
                    specialty_cd: 'CPOT',
                    specialty_nm: 'Compl Peds Otolaryng'
                  },
                  {
                    specialty_cd: 'LGEG',
                    specialty_nm: 'Lab Gent And Genomic'
                  },
                  {
                    specialty_cd: 'MIDS',
                    specialty_nm: 'Micrograph Derm Surg'
                  },
                  {
                    specialty_cd: 'NEUC',
                    specialty_nm: 'Neurocritical Care'
                  },
                  {
                    specialty_cd: 'PEHM',
                    specialty_nm: 'Peds Hosp Med'
                  },
                  {
                    specialty_cd: 'CFAP',
                    specialty_nm: 'Compl Family Plan'
                  },
                  {
                    specialty_cd: 'MDHB',
                    specialty_nm: 'Multisp Home Care'
                  },
                  {
                    specialty_cd: 'NAHE',
                    specialty_nm: 'Nations Hearing'
                  },
                  {
                    specialty_cd: '617',
                    specialty_nm: 'Voluntary Foster Car'
                  },
                  {
                    specialty_cd: '717',
                    specialty_nm: 'School Base Hlth Ctr'
                  },
                  {
                    specialty_cd: '105',
                    specialty_nm: 'Diabetes Prevention'
                  },
                  {
                    specialty_cd: '718',
                    specialty_nm: 'Retail Health Clinic'
                  },
                  {
                    specialty_cd: 'HVNA',
                    specialty_nm: 'Home Visits No Auth'
                  },
                  {
                    specialty_cd: 'CBAN',
                    specialty_nm: 'Cert Beh Analyst Ast'
                  },
                  {
                    specialty_cd: 'LBAN',
                    specialty_nm: 'Licensed Behavior An'
                  },
                  {
                    specialty_cd: 'MHAB',
                    specialty_nm: 'MH ABA Group'
                  }
                ]
              },
              NoOfReferenceRequests: '',
              ReferenceRequest: []
            },
            pzLoadTime: 'July 13, 2023 3:16:54 PM UTC',
            pzPageNameHash: '_pa1713711872607771pz',
            RequestType: ['ReferenceData']
          });
        } else if (dataView === 'D_HCPOrgRelationshipDetails') {
          resolve({
            Suffix: '',
            Sex: 'M',
            pzLoadTime: 'July 13, 2023 4:59:08 PM UTC',
            License: 'TBD',
            pzPageNameHash: '_pa1719839617669568pz',
            Title: 'Licensed Clinical Social Worker',
            ID: 'P-0000-2D0V',
            OrganizationList: [
              {
                OrganizationName: 'THOMAS POWERS, MD',
                PCPs: 4,
                Specialties: 0,
                HCOID: 'O-0000-1234',
                HCFs: 30,
                Membership: 'TBD',
                TaxID: '153215416',
                HCPs: 20,
                NetworkStatus: 'In-Network',
                NetworkEffectiveDate: '2007-08-01',
                NetworkExpirationDate: '9999-12-31'
              },
              {
                OrganizationName: 'THOMAS POWERS, MD',
                PCPs: 4,
                Specialties: 0,
                HCOID: 'O-0000-1234',
                HCFs: 0,
                Membership: 'TBD',
                TaxID: '153215416',
                HCPs: 20,
                NetworkStatus: 'Out-Network',
                NetworkEffectiveDate: '2007-08-01',
                NetworkExpirationDate: ''
              }
            ],
            Name: 'ROBERT D DIAMOND'
          });
        } else if (dataView === 'D_HCPLocationandContracts') {
          resolve({
            LicenseNo: 'TBD',
            Suffix: '',
            pzLoadTime: 'July 13, 2023 7:11:04 PM UTC',
            Locations: [
              {
                Status: 'In-Network',
                ParticipatingSpecialty: [],
                Email: '',
                AddressLine1: '459 E 149TH ST',
                AddressLine2: '',
                City: 'BRONX',
                StateProvinceName: 'New York',
                ZipCode: '10455',
                Taxonomy: 'TBD',
                HospitalAffiliation: 'TBD',
                LegacyProviderID: [
                  '227520-K52',
                  '253971-L52',
                  '315881-H52',
                  '316688-J52',
                  'A207037-E52',
                  'A262718-H52',
                  'F339100-G52',
                  'F347344-H52',
                  'F348590-H52',
                  'F432486-A52',
                  'P003987-M52',
                  'P011555-K52',
                  'P027240-C52'
                ],
                Name: 'Location 1',
                Phone: '919-777-2121',
                ID: 'F-0004-5JG3',
                LocationFeatures: ['ADA'],
                ContactFirstName: '',
                ContactLastName: '',
                ContactMiddleName: '',
                ContactTitleName: '',
                OfficeHours: {
                  Monday: ['9:00 am - 1:00 pm', '1:30 am - 5:00 pm'],
                  Tuesday: ['9:00 am - 1:00 pm', '1:30 am - 5:00 pm'],
                  Wednesday: ['9:00 am - 1:00 pm', '1:30 pm - 5:00 pm'],
                  Thursday: ['9:00 am - 1:00 pm', '1:30 pm - 5:00 pm'],
                  Friday: ['9:00 am - 1:00 pm', '1:30 pm - 5:00 pm'],
                  Saturday: [],
                  Sunday: []
                },
                LocationEffective: '1900-01-03'
              },
              {
                Status: 'In-Network',
                ParticipatingSpecialty: [],
                Email: 'taleter@baverley.org',
                AddressLine1: '459 E 149TH ST',
                AddressLine2: '',
                City: 'BRONX',
                StateProvinceName: 'New York',
                ZipCode: '10455',
                Taxonomy: 'TBD',
                HospitalAffiliation: '',
                LegacyProviderID: [
                  '244030-N52',
                  '244441-E52',
                  '246344-E52',
                  '248229-M52',
                  '248400-F52',
                  '248459-U52',
                  '248533-I52',
                  '248548-E52',
                  '248819-H52',
                  '249021-D52',
                  '249104-E52',
                  '249240-K52',
                  '249661-D52',
                  '250137-E52',
                  '251240-G52',
                  '251582-K52',
                  '252042-M52',
                  '252368-K52',
                  '252618-I52',
                  '252950-G52',
                  '253412-M52',
                  '253693-E52',
                  '253971-E52',
                  '255658-N52',
                  '255773-D52',
                  '256075-J52',
                  '257662-Q52',
                  '257980-E52',
                  '258685-G52',
                  '258809-H52',
                  '260116-L52',
                  '260315-B52',
                  '260505-E52',
                  '260558-G52',
                  '260826-L52',
                  '261268-H52',
                  '261488-K52',
                  '261518-E52',
                  '261535-N52',
                  '262811-H52',
                  '262941-G52',
                  '263387-V52',
                  '263803-N52',
                  '264680-G52',
                  '264888-U52',
                  '264920-M52',
                  '265092-C52',
                  '266069-P52',
                  '267233-A52',
                  '267435-C52',
                  '267587-I52',
                  '268311-I52',
                  '268336-I52',
                  '268455-H52',
                  '268550-B52',
                  '268657-N52',
                  '268682-F52',
                  '269562-E52',
                  '270018-D52',
                  '270502-I52',
                  '270702-M52',
                  '270964-G52',
                  '271118-D52',
                  '271692-K52',
                  '273373-R52',
                  '273836-L52',
                  '273941-H52',
                  '274307-L52',
                  '275682-F52',
                  '276087-P52',
                  '276214-C52',
                  '276436-D52',
                  '276543-G52',
                  '276584-A52',
                  '276601-A52',
                  '277192-J52',
                  '277824-K52',
                  '277836-G52',
                  '278028-U52',
                  '278165-Q52',
                  '279439-F52',
                  '280086-D52',
                  '280104-I52',
                  '280134-O52',
                  '280143-O52',
                  '280278-J52',
                  '281853-G52',
                  '282102-E52',
                  '282262-I52',
                  '282559-T52',
                  '282694-C52',
                  '282695-J52',
                  '283602-J52',
                  '284113-A52',
                  '284623-H52',
                  '284801-H52',
                  '285306-G52',
                  '285546-I52',
                  '285559-I52',
                  '286629-O52',
                  '286709-E52',
                  '286894-C52',
                  '287003-H52',
                  '287606-H52',
                  '287867-B52',
                  '288205-G52',
                  '288349-T52',
                  '288615-F52',
                  '288666-B52',
                  '288886-E52',
                  '288950-A52',
                  '289528-F52',
                  '289662-G52',
                  '289911-D52',
                  '290203-H52',
                  '290222-D52',
                  '290666-H52',
                  '290999-C52',
                  '291071-A52',
                  '291121-C52',
                  '291576-P52',
                  '291641-L52',
                  '292035-B52',
                  '292110-B52',
                  '292157-H52',
                  '292290-F52',
                  '292324-G52',
                  '292352-I52',
                  '292520-C52',
                  '292772-L52',
                  '292955-J52',
                  '293065-J52',
                  '293083-I52',
                  '293186-C52',
                  '293327-F52',
                  '293403-C52',
                  '293456-E52',
                  '293500-E52',
                  '293572-E52',
                  '293676-B52',
                  '293709-H52',
                  '293754-E52',
                  '293759-I52',
                  '293870-C52',
                  '293871-B52',
                  '293943-G52',
                  '294402-H52',
                  '294427-N52',
                  '294621-M52',
                  '294890-B52',
                  '295054-E52',
                  '296290-G52',
                  '296559-F52',
                  '296675-C52',
                  '297137-G52',
                  '297166-G52',
                  '297169-A52',
                  '297444-E52',
                  '297445-D52',
                  '297493-G52',
                  '297550-E85',
                  '297550-G52',
                  '297770-G52',
                  '297778-G52',
                  '297796-D52',
                  '298228-C52',
                  '298427-G52',
                  '298457-E52',
                  '298622-K52',
                  '298803-G52',
                  '299058-E52',
                  '299332-A52',
                  '299652-C52',
                  '300041-D52',
                  '300242-B52',
                  '300549-I52',
                  '300625-E52',
                  '300744-F52',
                  '300901-D52',
                  '301045-C52',
                  '301094-C52',
                  '301355-E52',
                  '301788-A52',
                  '302238-C52',
                  '302385-D52',
                  '302386-A52',
                  '302497-E52',
                  '302671-N52',
                  '302734-D52',
                  '302966-J52',
                  '303046-D52',
                  '303075-R52',
                  '303208-N52',
                  '303267-D52',
                  '303491-G52',
                  '304085-G52',
                  '304104-Q52',
                  '304144-C52',
                  '304242-C52',
                  '304290-B52',
                  '304584-A52',
                  '304688-C52',
                  '305526-G52',
                  '305600-L52',
                  '305720-G52',
                  '305743-C52',
                  '307899-E52',
                  '307953-D52',
                  '308315-C52',
                  '308416-D52',
                  '308491-M52',
                  '308739-A52',
                  '308892-C52',
                  '308918-F52',
                  '308926-G52',
                  '308969-J52',
                  '309006-B52',
                  '309026-P52',
                  '309183-F52',
                  '309316-B52',
                  '309327-D52',
                  '309353-B52',
                  '309420-F52',
                  '309465-F52',
                  '309607-C52',
                  '309650-A52',
                  '309726-I52',
                  '309750-I52',
                  '310080-D52',
                  '310222-H52',
                  '310304-J52',
                  '310559-G52',
                  '311321-E52',
                  '312317-K52',
                  '312456-B52',
                  '312468-L52',
                  '312523-B52',
                  '313342-K52',
                  '313993-A52',
                  '314414-E52',
                  '314493-A52',
                  '314557-G52',
                  '314564-C52',
                  '314658-F52',
                  '315188-L52',
                  '315189-B52',
                  '315365-J52',
                  '315617-B52',
                  '315881-L52',
                  '316291-C52',
                  '316688-C52',
                  '316702-A52',
                  '316765-I52',
                  '317013-F52',
                  '317244-D52',
                  '317267-F52',
                  '317289-B52',
                  '317382-F52',
                  '317390-H52',
                  '317520-F52',
                  '317567-F52',
                  '317724-E52',
                  '317974-E52',
                  '318235-T52',
                  '321684-D52',
                  '322067-E52',
                  '431010-A52',
                  'A146361-L52',
                  'A178563-F52',
                  'A187878-L52',
                  'A245905-M52',
                  'A253211-F52',
                  'B245298-A52',
                  'F301010-F52',
                  'F301809-F52',
                  'F301991-D52',
                  'F302223-C52',
                  'F302261-F52',
                  'F302304-D52',
                  'F302394-F52',
                  'F303098-E52',
                  'F303136-J52',
                  'F303166-F52',
                  'F303544-B52',
                  'F303650-F52',
                  'F303904-B52',
                  'F304606-B52',
                  'F305212-B52',
                  'F305246-F52',
                  'F305331-G52',
                  'F305372-C52',
                  'F305425-C52',
                  'F306213-E52',
                  'F306319-J52',
                  'F306390-F52',
                  'F306741-F52',
                  'F306836-I52',
                  'F306948-G52',
                  'F307108-F52',
                  'F307178-F52',
                  'F307253-I52',
                  'F307535-F52',
                  'F307593-H52',
                  'F307707-E52',
                  'F307997-C52',
                  'F308058-E52',
                  'F308138-J52',
                  'F308369-B52',
                  'F308455-A52',
                  'F308464-E52',
                  'F308571-F52',
                  'F308610-E52',
                  'F308655-H52',
                  'F308690-C52',
                  'F309034-O52',
                  'F309054-E52',
                  'F309068-F52',
                  'F309249-E52',
                  'F309333-D52',
                  'F309404-A52',
                  'F309542-E52',
                  'F309547-D52',
                  'F309559-Q52',
                  'F309844-A52',
                  'F309934-A52',
                  'F309994-D52',
                  'F310244-Q52',
                  'F310391-K52',
                  'F310404-E52',
                  'F310455-M52',
                  'F310577-C52',
                  'F310587-D52',
                  'F310979-D52',
                  'F330607-C52',
                  'F330660-G52',
                  'F334329-I52',
                  'F334384-F52',
                  'F334932-O52',
                  'F334982-F52',
                  'F335304-C52',
                  'F335667-E52',
                  'F336534-I52',
                  'F336588-E52',
                  'F336700-F52',
                  'F337011-C52',
                  'F337099-G52',
                  'F339100-J52',
                  'F339878-I52',
                  'F340084-I52',
                  'F340293-K52',
                  'F340379-N52',
                  'F342005-G52',
                  'F342203-H52',
                  'F342224-D52',
                  'F342381-G52',
                  'F342571-C52',
                  'F343597-O52',
                  'F343615-F52',
                  'F343743-A52',
                  'F344692-J52',
                  'F345427-H52',
                  'F345520-P52',
                  'F345806-G52',
                  'F345875-F52',
                  'F346739-G52',
                  'F347237-G52',
                  'F347344-I52',
                  'F347678-B52',
                  'F348590-L52',
                  'F348823-D52',
                  'F349312-H52',
                  'F349421-E52',
                  'F349462-E52',
                  'F349978-A52',
                  'F350729-E52',
                  'F381489-K52',
                  'F382114-F52',
                  'F382890-L52',
                  'F382921-D52',
                  'F383268-K52',
                  'F430293-E52',
                  'F430348-C52',
                  'F430357-C52',
                  'F430373-E52',
                  'F430376-E52',
                  'F430461-F52',
                  'F430490-F52',
                  'F430521-E52',
                  'F430636-M52',
                  'F430650-D52',
                  'F430757-L52',
                  'F430810-E52',
                  'F430866-H52',
                  'F430900-H52',
                  'F430932-E52',
                  'F430941-F52',
                  'F430978-C52',
                  'F431010-C52',
                  'F431042-E52',
                  'F431048-F52',
                  'F431179-F52',
                  'F431283-F52',
                  'F431290-E52',
                  'F431350-E52',
                  'F431420-C52',
                  'F431423-E52',
                  'F431479-G52',
                  'F431507-D52',
                  'F431515-F52',
                  'F431622-G52',
                  'F431746-D52',
                  'F431897-F52',
                  'F431924-B52',
                  'F431996-B52',
                  'F432001-G52',
                  'F432285-E52',
                  'F432336-B52',
                  'F432486-I52',
                  'F432521-C52',
                  'P003987-C52',
                  'P006986-B52',
                  'P006997-B52',
                  'P012240-K52',
                  'P013776-G52',
                  'P014317-E52',
                  'P015167-G52',
                  'P015204-E52',
                  'P016588-C52',
                  'P018577-G52',
                  'P019827-N52',
                  'P019877-C52',
                  'P020357-D52',
                  'P020571-C52',
                  'P020987-Q52',
                  'P025223-A52',
                  'P027240-G52',
                  'P029378-O52'
                ],
                Name: 'Location 2',
                Phone: '',
                ID: 'F-0004-4HWT',
                LocationFeatures: ['ADA', 'Telemedicine'],
                ContactFirstName: '',
                ContactLastName: '',
                ContactMiddleName: '',
                ContactTitleName: '',
                OfficeHours: {
                  Monday: ['8:00 am - 4:00 pm'],
                  Thursday: ['8:00 am - 4:00 pm'],
                  Friday: [],
                  Sunday: [],
                  Wednesday: ['8:00 am - 4:00 pm'],
                  Tuesday: [],
                  Saturday: []
                },
                LocationEffective: '1900-01-03'
              }
            ],
            pzPageNameHash: '_pa1727756189922742pz',
            Title: 'NP',
            Gender: 'F',
            ID: 'P-0000-003Y',
            Name: 'HERSY E CONTRERAS'
          });
        } else if (dataView === 'D_HCPLocationDetailsExpPage') {
          resolve({
            HCODivision: '',
            NetworkStatus: 'Out-of-Network',
            ZipCode: '10528',
            pzLoadTime: 'September 18, 2023 1:14:27 PM UTC',
            Locations: [
              {
                pyValue: '[]'
              }
            ],
            pzPageNameHash: '_pa3340016951382013pz',
            City: 'HARRISON',
            Gender: '',
            HCOName: 'St. Joseph Medical Center/St. Vincent Hospital Westchester (SJSV)',
            LegacyProviderID: [
              '227520-K52',
              '253971-L52',
              '315881-H52',
              '316688-J52',
              'A207037-E52',
              'A262718-H52',
              'F339100-G52',
              'F347344-H52',
              'F348590-H52',
              'F432486-A52',
              'P003987-M52',
              'P011555-K52',
              'P027240-C52'
            ],
            FacilityID: 'F-0000-Y1GR',
            AddressLine2: '',
            AddressLine1: '275 NORTH ST',
            MinAgeLimit: '',
            State: 'New York',
            MaxAgeLimit: '',
            HCOID: '',
            LocationFeatures: ['ADA'],
            OfficeLanguages: [
              'Urdu',
              'Ukrainian',
              'Telugu',
              'Spanish',
              'Russian',
              'Polish',
              'Italian',
              'Hindi',
              'French',
              'Bengali',
              'AT&T Language Bank*'
            ]
          });
        } else if (dataView === 'D_HCPNotes') {
          resolve({
            pzLoadTime: 'July 14, 2023 6:28:58 PM UTC',
            pzPageNameHash: '_pa166717881528604pz',
            TotalRecords: 16,
            ProviderID: 'P-0005-VB6P',
            Notes: [
              {
                CreatedBy: 'DGUI',
                CreatedDate: '2014-05-09',
                CreatedTime: '12:00 am',
                LegacyID: '254761-A85',
                Notes2:
                  'PROVIDER APPROVED BY QA&A,PROVIDER APPROVED BY QA&A,PROVIDER APPROVED BY QA&A,PROVIDER APPROVED BY QA&A,PROVIDER APPROVED BY QA&A,PROVIDER APPROVED BY QA&A',
                UpdatedBy: 'MIGRATION',
                UpdatedDate: '2014-05-09',
                UpdatedTime: '12:00 am'
              },
              {
                CreatedBy: '',
                CreatedDate: '',
                CreatedTime: '',
                LegacyID: '',
                Notes2: '',
                UpdatedBy: '',
                UpdatedDate: '',
                UpdatedTime: ''
              },
              {
                CreatedBy: 'DGUI',
                CreatedDate: '2014-05-09',
                CreatedTime: '12:00 am',
                LegacyID: '254761-A85',
                Notes2: 'PROVIDER APPROVED BY QA&A',
                UpdatedBy: 'MIGRATION',
                UpdatedDate: '2014-05-09',
                UpdatedTime: '12:00 am'
              },
              {
                CreatedBy: 'DGUI',
                CreatedDate: '2014-05-09',
                CreatedTime: '12:00 am',
                LegacyID: '254761-A85',
                Notes2: 'PROVIDER APPROVED BY QA&A',
                UpdatedBy: 'MIGRATION',
                UpdatedDate: '2014-05-09',
                UpdatedTime: '12:00 am'
              },
              {
                CreatedBy: 'DGUI',
                CreatedDate: '2014-05-09',
                CreatedTime: '12:00 am',
                LegacyID: '254761-A85',
                Notes2: 'PROVIDER APPROVED BY QA&A',
                UpdatedBy: 'MIGRATION',
                UpdatedDate: '2014-05-09',
                UpdatedTime: '12:00 am'
              }
            ]
          });
        } else if (dataView === 'D_HCPLocandConOfficeHours') {
          resolve({
            OfficeHours: {
              Monday: [
                {
                  pyValue: '9:00 am - 5:00 pm'
                }
              ],
              Thursday: [
                {
                  pyValue: '9:00 am - 5:00 pm'
                }
              ],
              Friday: [
                {
                  pyValue: '9:00 am - 5:00 pm'
                }
              ],
              Sunday: [],
              Wednesday: [
                {
                  pyValue: '9:00 am - 5:00 pm'
                }
              ],
              Tuesday: [
                {
                  pyValue: '9:00 am - 5:00 pm'
                }
              ],
              Saturday: []
            },
            pzLoadTime: 'September 18, 2023 1:14:27 PM UTC',
            pzPageNameHash: '_pa3340016945154353pz',
            AreaOfExpertise: [
              {
                mixedValue: 'Attention Deficit Disorder/ADD-ADHD',
                mixedValueType: 'string'
              },
              {
                mixedValue: 'Anxiety',
                mixedValueType: 'string'
              },
              {
                mixedValue: 'Child/Adoliescent Issues',
                mixedValueType: 'string'
              },
              {
                mixedValue: 'Depression',
                mixedValueType: 'string'
              },
              {
                mixedValue: 'Play Therapy',
                mixedValueType: 'string'
              }
            ],
            ParticpatingSpeciality: []
          });
        } else if (dataView === 'D_HCOOrgDetails') {
          resolve({
            OrganizationName: 'JULIAN  CRAIG, MD',
            City: 'HOUSTON',
            AddressLine2: '',
            AddressLine1: '11375 CORTEZ BLVD BROOKSVILLE',
            State: 'Andorra la Vella',
            Country: '',
            Details: {
              OrganizationName: 'JULIAN  CRAIG, MD',
              DEA: [
                '123456789 - NY',
                '2345678901 - CT',
                '123456789 - NY',
                '2345678901 - CT',
                '123456789 - NY'
              ],
              Medicare: '352254112',
              Specialties: 0,
              NetworkStatus: 'Out-Network',
              NPI: '1205920626',
              Delegated: 'Non-Delegated',
              OrganizationID: 'O-0000-0001',
              TaxID: '352254112',
              City: '',
              LegacyProviderID: [
                '352254112-001',
                '352254112-001',
                '352254112-001',
                '352254112-001'
              ],
              AddressLine2: '',
              AddressLine1: '',
              Porg: '',
              PCPs: 0,
              State: '',
              HCOType: '',
              Country: '',
              MedicaidList: ['153213216', '153213216', '153213216', '153213216'],
              EffectiveFrom: '2022-01-20',
              HCPs: 1
            },
            HFDeliverySystemsManager: {
              Director: 'TBD',
              AccountManager: 'TBD'
            },
            pzLoadTime: 'August 2, 2023 6:51:53 PM UTC',
            pzPageNameHash: '_pa702641328679562pz',
            OrganizationRelationship: [
              {
                PCPs: 0,
                Specialties: 0,
                HCFs: 0,
                OrganizationID: '',
                TaxID: '',
                ChildHCOName: '',
                HCPs: 0
              }
            ],
            OrganizationID: 'O-0000-0001'
          });
        } else if (dataView === 'D_HCOFacilityRelationships') {
          resolve({
            OrganizationName: 'JULIAN CRAIG, MD',
            ZipCode: '',
            pzLoadTime: 'August 2, 2023 6:54:50 PM UTC',
            pzPageNameHash: '_pa702819548375590pz',
            OrganizationID: 'O-0000-0001',
            City: '',
            AddressLine2: '',
            AddressLine1: '',
            State: '',
            Country: '',
            TotalRecords: 1,
            Records: [
              {
                Status: 'Out-Network',
                Medicare: '271427581',
                ZipCode: '11355-3105',
                TaxID: '271427581',
                City: 'FLUSHING',
                FacilityName: 'JUN ACPUNCTURE PC',
                FacilityID: 'F-0003-YYNX',
                AddressLine2: '',
                AddressLine1: '41-61 KISSENA BLVD STE 20',
                Phone: '718-616-8488',
                State: 'New York',
                Country: 'United States of America'
              },
              {
                Status: '',
                Medicare: '',
                ZipCode: '',
                TaxID: '',
                City: '',
                FacilityName: '',
                FacilityID: '',
                AddressLine2: '',
                AddressLine1: '',
                Phone: '',
                State: '',
                Country: ''
              },
              {
                Status: 'Out-Network',
                Medicare: '271427581',
                ZipCode: '11355-3105',
                TaxID: '271427581',
                City: 'FLUSHING',
                FacilityName: 'JUN ACPUNCTURE PC',
                FacilityID: 'F-0003-YYNX',
                AddressLine2: '',
                AddressLine1: '41-61 KISSENA BLVD STE 20',
                Phone: '718-616-8488',
                State: 'New York',
                Country: 'United States of America'
              },
              {
                Status: 'Out-Network',
                Medicare: '271427581',
                ZipCode: '11355-3105',
                TaxID: '271427581',
                City: 'FLUSHING',
                FacilityName: 'JUN ACPUNCTURE PC',
                FacilityID: 'F-0003-YYNX',
                AddressLine2: '',
                AddressLine1: '41-61 KISSENA BLVD STE 20',
                Phone: '718-616-8488',
                State: 'New York',
                Country: 'United States of America'
              },
              {
                Status: 'Out-Network',
                Medicare: '271427581',
                ZipCode: '11355-3105',
                TaxID: '271427581',
                City: 'FLUSHING',
                FacilityName: 'JUN ACPUNCTURE PC',
                FacilityID: 'F-0003-YYNX',
                AddressLine2: '',
                AddressLine1: '41-61 KISSENA BLVD STE 20',
                Phone: '718-616-8488',
                State: 'New York',
                Country: 'United States of America'
              },
              {
                Status: 'Out-Network',
                Medicare: '271427581',
                ZipCode: '11355-3105',
                TaxID: '271427581',
                City: 'FLUSHING',
                FacilityName: 'JUN ACPUNCTURE PC',
                FacilityID: 'F-0003-YYNX',
                AddressLine2: '',
                AddressLine1: '41-61 KISSENA BLVD STE 20',
                Phone: '718-616-8488',
                State: 'New York',
                Country: 'United States of America'
              },
              {
                Status: 'Out-Network',
                Medicare: '271427581',
                ZipCode: '11355-3105',
                TaxID: '271427581',
                City: 'FLUSHING',
                FacilityName: 'JUN ACPUNCTURE PC',
                FacilityID: 'F-0003-YYNX',
                AddressLine2: '',
                AddressLine1: '41-61 KISSENA BLVD STE 20',
                Phone: '718-616-8488',
                State: 'New York',
                Country: 'United States of America'
              }
            ]
          });
        } else if (dataView === 'D_HCOProfessionalRelationships') {
          resolve({
            pzLoadTime: 'August 2, 2023 6:50:33 PM UTC',
            pzPageNameHash: '_pa702557690357637pz',
            OrganizationalProfessionalRelationships: {
              OrganizationName: 'JULIAN CRAIG, MD',
              OrganizationID: 'O-0000-0001',
              OrgAddress: '',
              City: '',
              AddressLine2: '',
              AddressLine1: '',
              State: '',
              ZipCode: '',
              TotalRecords: 5,
              Records: [
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0000-00VM',
                  Status: 'In-Network',
                  FirstName: 'RX Max J Smith TAB',
                  NPI: '1578096251',
                  ZipCode: '1234',
                  Prefix: '',
                  TaxID: 'Null',
                  City: 'Houston',
                  MiddleName: '',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: 'TX',
                  LastName: 'CICES',
                  MedicaidList: [
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616'
                  ],
                  SpecialtyList: [
                    'Pediatric Surgery,Pediatric Surgery,Surgery Neurologica,Surgery Neurologica,Pediatric Surgery,Surgery Neurologica'
                  ]
                },
                {
                  Medicare: '',
                  ProfessionalID: '',
                  FirstName: '',
                  NPI: '',
                  ZipCode: '',
                  Prefix: '',
                  Status: '',
                  SpecialtyList: [],
                  TaxID: '',
                  City: '',
                  MiddleName: '',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: '',
                  State: '',
                  LastName: '',
                  MedicaidList: []
                },
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0003-N523',
                  Status: 'Out-of-Network',
                  FirstName: 'JOANNE',
                  SpecialtyList: ['Dermatology'],
                  NPI: '1972991677',
                  ZipCode: '',
                  Prefix: '',
                  TaxID: 'Null',
                  City: '',
                  MiddleName: 'Y',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: '',
                  LastName: '',
                  MedicaidList: []
                },
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0000-00VM',
                  Status: 'In-Network',
                  FirstName: 'RX Max J Smith TAB',
                  NPI: '1578096251',
                  ZipCode: '1234',
                  Prefix: '',
                  TaxID: 'Null',
                  City: 'Houston',
                  MiddleName: '',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: 'TX',
                  LastName: 'CICES',
                  MedicaidList: [
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616'
                  ],
                  SpecialtyList: [
                    'Pediatric Surgery,Pediatric Surgery,Surgery Neurologica,Surgery Neurologica,Pediatric Surgery,Surgery Neurologica'
                  ]
                },
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0003-N5TV',
                  FirstName: 'JEFFREY',
                  NPI: '1700052685',
                  ZipCode: '',
                  Prefix: '',
                  Status: 'In-Network',
                  SpecialtyList: ['Dermatology'],
                  TaxID: 'Null',
                  City: '',
                  MiddleName: 'M',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: '',
                  LastName: '',
                  MedicaidList: []
                },
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0003-N523',
                  Status: 'Out-of-Network',
                  FirstName: 'JOANNE',
                  SpecialtyList: ['Dermatology'],
                  NPI: '1972991677',
                  ZipCode: '',
                  Prefix: '',
                  TaxID: 'Null',
                  City: '',
                  MiddleName: 'Y',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: '',
                  LastName: '',
                  MedicaidList: []
                },
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0000-00VM',
                  Status: 'In-Network',
                  FirstName: 'RX Max J Smith TAB',
                  NPI: '1578096251',
                  ZipCode: '1234',
                  Prefix: '',
                  TaxID: 'Null',
                  City: 'Houston',
                  MiddleName: '',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: 'TX',
                  LastName: 'CICES',
                  MedicaidList: [
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616'
                  ],
                  SpecialtyList: [
                    'Pediatric Surgery,Pediatric Surgery,Surgery Neurologica,Surgery Neurologica,Pediatric Surgery,Surgery Neurologica'
                  ]
                },
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0003-N5TV',
                  FirstName: 'JEFFREY',
                  NPI: '1700052685',
                  ZipCode: '',
                  Prefix: '',
                  Status: 'In-Network',
                  SpecialtyList: ['Dermatology'],
                  TaxID: 'Null',
                  City: '',
                  MiddleName: 'M',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: '',
                  LastName: '',
                  MedicaidList: []
                },
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0003-N523',
                  Status: 'Out-of-Network',
                  FirstName: 'JOANNE',
                  SpecialtyList: ['Dermatology'],
                  NPI: '1972991677',
                  ZipCode: '',
                  Prefix: '',
                  TaxID: 'Null',
                  City: '',
                  MiddleName: 'Y',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: '',
                  LastName: '',
                  MedicaidList: []
                },
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0000-00VM',
                  Status: 'In-Network',
                  FirstName: 'RX Max J Smith TAB',
                  NPI: '1578096251',
                  ZipCode: '1234',
                  Prefix: '',
                  TaxID: 'Null',
                  City: 'Houston',
                  MiddleName: '',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: 'TX',
                  LastName: 'CICES',
                  MedicaidList: [
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616'
                  ],
                  SpecialtyList: [
                    'Pediatric Surgery,Pediatric Surgery,Surgery Neurologica,Surgery Neurologica,Pediatric Surgery,Surgery Neurologica'
                  ]
                },
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0003-N5TV',
                  FirstName: 'JEFFREY',
                  NPI: '1700052685',
                  ZipCode: '',
                  Prefix: '',
                  Status: 'In-Network',
                  SpecialtyList: ['Dermatology'],
                  TaxID: 'Null',
                  City: '',
                  MiddleName: 'M',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: '',
                  LastName: '',
                  MedicaidList: []
                },
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0003-N523',
                  Status: 'Out-of-Network',
                  FirstName: 'JOANNE',
                  SpecialtyList: ['Dermatology'],
                  NPI: '1972991677',
                  ZipCode: '',
                  Prefix: '',
                  TaxID: 'Null',
                  City: '',
                  MiddleName: 'Y',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  Suffix: '',
                  Phone: 'Null',
                  State: '',
                  LastName: '',
                  MedicaidList: []
                }
              ]
            }
          });
        } else if (dataView === 'D_HCOContracts') {
          resolve({
            OrgContractsReimbursements: {
              OrganizationID: 'O-1AB27B11',
              OrganizationName: 'Montefiore Hospital System',
              OrganizationAddress: '100 Church Street, New York, NY 10006',
              ContractsReimbursements: {
                Sequestration: 'Yes',
                PCCCode: 'N/A',
                POrg: '14',
                DelegatedLevel: '1-Delegated',
                Contracts: [
                  {
                    ContractName: 'PCP',
                    Reimbursements: [
                      {
                        Company: '01',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '20',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '30',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '40',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      }
                    ],
                    TINs: ['123456789', '987654321', '123123124', '456456345', '234345654'],
                    Comments: [
                      'This is for the PCP Contract - Comment Line 1',
                      'This is for the PCP Contract - Comment Line 2',
                      'This is for the PCP Contract - Comment Line 3'
                    ]
                  },
                  {
                    ContractName: 'Specialists',
                    Reimbursements: [
                      {
                        Company: '01',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '20',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '30',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '40',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      }
                    ],
                    TINs: ['123456789', '987654321', '123123124', '456456345', '234345654'],
                    Comments: [
                      'This is for the Specialist Contract - Comment Line 1',
                      'This is for the Specialist Contract - Comment Line 2',
                      'This is for the Specialist Contract - Comment Line 3'
                    ]
                  },
                  {
                    ContractName: 'Inpatient',
                    Reimbursements: [
                      {
                        Company: '01',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '20',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '30',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '40',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      }
                    ],
                    TINs: ['123456789', '987654321', '123123124', '456456345', '234345654'],
                    Comments: [
                      'This is for the InPatient Contract - Comment Line 1',
                      'This is for the InPatient Contract - Comment Line 2',
                      'This is for the InPatient Contract - Comment Line 3'
                    ]
                  },
                  {
                    ContractName: 'Outpatient',
                    Reimbursements: [
                      {
                        Company: '01',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '20',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '30',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      },
                      {
                        Company: '40',
                        Description: 'MCD',
                        In: 'Yes',
                        Cap: 'No',
                        'Rate%': '97%',
                        FeeSchedule: '*_FF/_OF'
                      }
                    ],
                    TINs: ['123456789', '987654321', '123123124', '456456345', '234345654'],
                    Comments: [
                      'This is for the OutPatient Contract - Comment Line 1',
                      'This is for the OutPatient Contract - Comment Line 2',
                      'This is for the OutPatient Contract - Comment Line 3'
                    ]
                  }
                ]
              }
            },
            pzLoadTime: 'July 14, 2023 8:30:06 PM UTC',
            pzPageNameHash: '_pa173977189882051pz'
          });
        } else if (dataView === 'D_HCONotesLandingDetails') {
          resolve({
            OrgNotes: {
              OrganizationID: 'O-1AB27B11',
              OrganizationName: 'Montefiore Hospital System',
              OrganizationAddress: '100 Church Street, New York, NY 10006',
              TotalRecords: '60',
              Records: [
                {
                  Date: '11/19/2021',
                  Time: '8:48AM',
                  Description: 'Provider has add a location is in progress',
                  AddedBy: 'Paul Allen'
                },
                {
                  Date: '11/19/2020',
                  Time: '8:48AM',
                  Description:
                    'Provider has phone number request verfied. Provider has add a location is in progress,Provider has phone number request verfied. Provider has add a location is in progress,Provider has phone number request verfied. Provider has add a location is in progress',
                  AddedBy: 'Mark Quinn'
                },
                {
                  Date: '11/19/2021',
                  Time: '8:48AM',
                  Description: 'Provider has add a location is in progress',
                  AddedBy: 'Paul '
                },
                {
                  Date: '11/19/2020',
                  Time: '8:48AM',
                  Description: 'Provider has phone number request verfied',
                  AddedBy: 'Mark Quinn'
                },
                {
                  Date: '11/19/2021',
                  Time: '8:48AM',
                  Description: 'Provider has add a location is in progress',
                  AddedBy: 'Paul Allen'
                },
                {
                  Date: '11/19/2020',
                  Time: '8:48AM',
                  Description: 'Provider has phone number request verfied',
                  AddedBy: 'Mark Quinn'
                },
                {
                  Date: '11/19/2021',
                  Time: '8:48AM',
                  Description: 'Provider has add a location is in progress',
                  AddedBy: 'Paul Allen'
                },
                {
                  Date: '11/19/2020',
                  Time: '8:48AM',
                  Description: 'Provider has phone number request verfied',
                  AddedBy: 'Mark Quinn'
                },
                {
                  Date: '11/19/2021',
                  Time: '8:48AM',
                  Description: 'Provider has add a location is in progress',
                  AddedBy: 'Paul Allen'
                },
                {
                  Date: '11/19/2020',
                  Time: '8:48AM',
                  Description: 'Provider has phone number request verfied',
                  AddedBy: 'Mark Quinn'
                }
              ]
            },
            pzLoadTime: 'July 14, 2023 8:30:06 PM UTC',
            pzPageNameHash: '_pa173977189882051pz'
          });
        } else if (dataView === 'D_GlobalSearch') {
          console.log('parameters: ', parameters);
          resolve({
            pzLoadTime: 'August 8, 2023 3:44:23 PM UTC',
            pzPageNameHash: '_pa5435393320506pz',
            pxResults: [
              {
                ProviderResultsCount: '0',
                CategoryName: 'Professional ID',
                CategoryValue: []
              },
              {
                OrgResultsCount: '7150',
                CategoryName: 'Zipcode',
                CategoryValue: ['11102', '11106', '11103'],
                FacilityResultsCount: '7150'
              },
              {
                OrgResultsCount: '0',
                CategoryName: 'Organization ID',
                CategoryValue: []
              },
              {
                CategoryName: 'FacilityID',
                CategoryValue: [],
                FacilityResultsCount: '0'
              },
              {
                ProviderResultsCount: '0',
                OrgResultsCount: '0',
                CategoryName: 'Medicare #',
                CategoryValue: []
              },
              {
                OrgResultsCount: '0',
                CategoryName: 'Zipcode',
                CategoryValue: [],
                FacilityResultsCount: '0'
              },
              {
                OrgResultsCount: '0',
                CategoryName: 'Phone #',
                CategoryValue: [],
                FacilityResultsCount: '0'
              },
              {
                ProviderResultsCount: '0',
                CategoryName: 'Medicaid #',
                CategoryValue: []
              },
              {
                ProviderResultsCount: '0',
                OrgResultsCount: '0',
                CategoryName: 'NPI',
                CategoryValue: []
              },
              {
                OrgResultsCount: '0',
                CategoryName: 'Tax ID',
                CategoryValue: []
              },
              {
                ProviderResultsCount: '0',
                CategoryName: 'License #',
                CategoryValue: []
              },
              {
                ProviderResultsCount: '0',
                CategoryName: 'SSN',
                CategoryValue: []
              },
              {
                ProviderResultsCount: '0',
                CategoryName: 'CAQH',
                CategoryValue: []
              },
              {
                ProviderResultsCount: '102',
                OrgResultsCount: '115',
                CategoryName: 'Street',
                CategoryValue: ['STE 125', 'STE 103', 'STE 105'],
                FacilityResultsCount: '115'
              },
              {
                ProviderResultsCount: '66',
                OrgResultsCount: '67',
                CategoryName: 'City',
                CategoryValue: ['STERLING', 'STEUBENVILLE', 'STERLING HEIGHTS'],
                FacilityResultsCount: '67'
              },
              {
                ProviderResultsCount: '0',
                OrgResultsCount: '0',
                CategoryName: 'State',
                CategoryValue: [],
                FacilityResultsCount: '0'
              },
              {
                OrgResultsCount: '1100',
                CategoryName: 'HCO Name',
                CategoryValue: [
                  'STEPHEN  LITVAK, MD',
                  'STEVE T AYANRUOH, MD',
                  'STECHEL, RICHARD P, MD'
                ]
              },
              {
                CategoryName: 'HCF Name',
                CategoryValue: [
                  'STERLING OPTICAL',
                  'STERLING PODIATRIC PC',
                  'STEINWAY CHILD & FAMILY'
                ],
                FacilityResultsCount: '481'
              },
              {
                ProviderResultsCount: '0',
                CategoryName: 'County',
                CategoryValue: [],
                FacilityResultsCount: '0'
              },
              {
                OrgResultsCount: '0',
                CategoryName: 'Country',
                CategoryValue: []
              },
              {
                ProviderResultsCount: '14277',
                CategoryName: 'First Name',
                CategoryValue: ['STEVEN', 'STEPHEN', 'STEPHANIE']
              },
              {
                ProviderResultsCount: '2220',
                CategoryName: 'Last Name',
                CategoryValue: ['STERN', 'STEIN', 'STEVENS']
              },
              {
                CategoryName: 'Contact Name',
                CategoryValue: ['STEPHEN NANI', 'STEPHANIE THOMPSON', 'STEPHANIE'],
                FacilityResultsCount: '387'
              },
              {
                ProviderResultsCount: '0',
                OrgResultsCount: '0',
                CategoryName: 'LegacyProviderID',
                CategoryValue: [],
                FacilityResultsCount: '0'
              }
            ]
          });
        } else if (
          dataView === 'D_LookUpRefData' &&
          parameters.ReferenceRequest === 'TypeOfFacility'
        ) {
          resolve({
            ReferenceData: {
              ReferenceResponse: {
                TypeOfFacility: [
                  {
                    code: 'AF',
                    Name: 'Alcohol Abuse Facility'
                  },
                  {
                    code: 'AM',
                    Name: 'Freestanding Ambulatory Surgical Center'
                  },
                  {
                    code: 'AN',
                    Name: 'Anesthesiology Group'
                  },
                  {
                    code: 'BC',
                    Name: 'Birthing Center'
                  },
                  {
                    code: 'CA',
                    Name: 'CM Agency'
                  },
                  {
                    code: 'CL',
                    Name: 'Clinic'
                  },
                  {
                    code: 'DC',
                    Name: 'Social Day'
                  },
                  {
                    code: 'DI',
                    Name: 'Dialysis'
                  },
                  {
                    code: 'DM',
                    Name: 'Durable Medical Equipment Vendor'
                  },
                  {
                    code: 'DT',
                    Name: 'Diagnostic & Testing Center'
                  },
                  {
                    code: 'ED',
                    Name: 'Exempt Drug Rehabilitation Unit'
                  },
                  {
                    code: 'EE',
                    Name: 'Exempt Epilepsy Unit'
                  },
                  {
                    code: 'EM',
                    Name: 'Exempt Medical Rehabilitation'
                  },
                  {
                    code: 'EP',
                    Name: 'Exempt Psychiatry Unit'
                  },
                  {
                    code: 'HE',
                    Name: 'Health Homes'
                  },
                  {
                    code: 'HH',
                    Name: 'Home Health Agency'
                  },
                  {
                    code: 'HI',
                    Name: 'Home Infusion Pharmacy'
                  },
                  {
                    code: 'HO',
                    Name: 'Hospital'
                  },
                  {
                    code: 'HS',
                    Name: 'Hospice'
                  },
                  {
                    code: 'IF',
                    Name: 'Home Infusion Agency'
                  },
                  {
                    code: 'LA',
                    Name: 'Laboratory'
                  },
                  {
                    code: 'MC',
                    Name: 'Retail Health Clinic'
                  },
                  {
                    code: 'MD',
                    Name: 'Medical Day Care'
                  },
                  {
                    code: 'ME',
                    Name: 'Mental Health Agency'
                  },
                  {
                    code: 'OG',
                    Name: 'Outpatient Group'
                  },
                  {
                    code: 'PG',
                    Name: 'Physical Therapy Group'
                  },
                  {
                    code: 'RF',
                    Name: 'Freestand Radiology'
                  },
                  {
                    code: 'SA',
                    Name: 'Substance Abuse Facility'
                  },
                  {
                    code: 'SN',
                    Name: 'Skilled Nursing Facility'
                  },
                  {
                    code: 'TR',
                    Name: 'Transportation Vendor'
                  },
                  {
                    code: 'UC',
                    Name: 'Urgent Care'
                  },
                  {
                    code: 'ID',
                    Name: 'Independant Diagostic Testing Facility'
                  },
                  {
                    code: 'RE',
                    Name: 'Rehabilitation Facility'
                  },
                  {
                    code: 'VA',
                    Name: 'Veterans Administration Facility'
                  }
                ]
              }
            },
            pzLoadTime: 'August 25, 2023 3:47:28 PM UTC',
            pzPageNameHash: '_pa589232105717605pz',
            RequestType: ['ReferenceData']
          });
        } else if (
          dataView === 'D_LookUpRefData' &&
          parameters.ReferenceRequest === 'HCOEntityType'
        ) {
          resolve({
            ReferenceData: {
              ReferenceResponse: {
                HCOEntityType: [
                  {
                    code: 'HSPS',
                    Name: 'Hospital System'
                  },
                  {
                    code: 'IHSP',
                    Name: 'Individual Hospital'
                  },
                  {
                    code: 'FQHC',
                    Name: 'Federal Qualified Health Center'
                  },
                  {
                    code: 'DT&C',
                    Name: 'Diagnostic and Treatment Centers'
                  },
                  {
                    code: 'ADSS',
                    Name: 'Addiction Service and Support'
                  },
                  {
                    code: 'CPRV',
                    Name: 'Community Provider'
                  },
                  {
                    code: 'FSBH',
                    Name: 'Free Standing Behavior Health Provider'
                  },
                  {
                    code: 'FSAP',
                    Name: 'Free Standing Ancillary Provider'
                  },
                  {
                    code: 'IAAN',
                    Name: 'Independent Physician Association'
                  },
                  {
                    code: 'LHSP',
                    Name: 'Large Hospital'
                  },
                  {
                    code: 'SHSP',
                    Name: 'Sponsor Hospital'
                  },
                  {
                    code: 'PHRM',
                    Name: 'Pharmacy Type'
                  }
                ]
              }
            },
            pzLoadTime: 'August 25, 2023 3:46:34 PM UTC',
            pzPageNameHash: '_pa589175908776989pz',
            RequestType: ['ReferenceData']
          });
        } else if (dataView === 'D_CheckPrivilege') {
          resolve({ pzLoadTime: 'August 29, 2023 2:59:42 PM UTC', CanInitiateAmendment: true });
        } else if (dataView === 'D_HCFFacilityDetails') {
          resolve({
            FacilityID: 'F-FAKE-0001',
            AddressLine2: '',
            AddressLine1: '100 Church St',
            FacilityDetails: {
              Status: 'In-Network',
              Memberships: 20,
              SpecialtiesList: ['Oph Retina/Vitreous', 'Ophthalmology', 'Surg Ocular Plastic'],
              HealthCareFacilityType: 'Alcohol Abuse Facility',
              Languages: ['English'],
              LegacyProviderID: [],
              OrganizationID: '',
              OfficeHours: {
                Monday: ['8:00 am - 5:00 pm'],
                Thursday: ['8:00 am - 5:00 pm'],
                Friday: ['8:00 am - 5:00 pm'],
                Sunday: [],
                Wednesday: ['8:00 am - 5:00 pm'],
                Tuesday: ['8:00 am - 5:00 pm'],
                Saturday: ['8:00 am - 5:00 pm']
              },
              Specialists: 0,
              PCPs: 3,
              EffectiveFrom: '2022-01-01',
              FacilityType: '',
              ContactInfo: [
                {
                  Role: 'Service Location',
                  ContactMiddleName: '',
                  Email: 'office@optimumchiropracticcenter.com',
                  ContactTitleName: '',
                  Phone: '347-475-0911',
                  ContactFirstName: 'Dr Joe D Jonas',
                  Fax: '',
                  ContactLastName: ''
                }
              ],
              OpCert: ['7001398N', '7001398N', '7001398N'],
              HCPs: 0,
              Accessible: ['ADA', 'Handicap Access', 'Telemedicine', 'Schedule']
            },
            ZipCode: '11123',
            State: 'NY',
            pzLoadTime: 'August 31, 2023 8:35:08 PM UTC',
            pzPageNameHash: '_pa2010070162406598pz',
            City: 'New York',
            FacilityName: 'EXCELSIOR TEXAS'
          });
        } else if (dataView === 'D_HCFProfessionalRelationships') {
          resolve({
            pzLoadTime: 'August 2, 2023 6:50:33 PM UTC',
            pzPageNameHash: '_pa702557690357637pz',
            FacilityProfessionalRelationships: {
              FacilityID: 'F-0001-PB7W',
              TotalRecords: 5,
              Records: [
                {
                  FirstName: 'THOMAS',
                  HCOName: '',
                  LastName: 'PORTZLINE',
                  Medicare: '97J22LW981',
                  MiddleName: 'S',
                  NPI: '1578096251',
                  Phone: '',
                  Prefix: '',
                  ProfessionalID: 'P-0001-JST7',
                  Status: 'Out-of-Network',
                  Suffix: '',
                  TaxID: '',
                  ZipCode: '',
                  City: '',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  StateProvinceName: '',
                  MedicaidList: [
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616',
                    'BH6889616'
                  ],
                  SpecialtyList: ['Psychiatrist', 'Lcsd Clnl Soc Wrkr']
                },
                {
                  FirstName: '',
                  HCOName: '',
                  LastName: '',
                  Medicare: '',
                  MiddleName: '',
                  NPI: '',
                  Phone: '',
                  Prefix: '',
                  ProfessionalID: '',
                  Status: '',
                  Suffix: '',
                  TaxID: '',
                  ZipCode: '',
                  City: '',
                  Name: '',
                  AddressLine2: '',
                  AddressLine1: '',
                  StateProvinceName: '',
                  MedicaidList: [],
                  SpecialtyList: [
                    'Hospital Inpatient',
                    'ASA I/P Svc',
                    'Home Health Services',
                    'Physical Therapy Ser',
                    'Occupational Therapy',
                    'Speech/Language Ther',
                    'HIV PCP Clinic',
                    'General Clinic Servi',
                    'MH-Outpatient',
                    '749 ASA-Outpatient',
                    'Social Work',
                    'Obstetrics',
                    'Psychiatry - General',
                    'Mntl Hlth Clin-Trmt',
                    'Health Home',
                    'Hospitalists',
                    'Hospital'
                  ]
                }
              ]
            }
          });
        } else if (dataView === 'D_HCPLCExpPSpecialities') {
          resolve({
            ProfessionalID: 'P-0005-W7R1',
            ParticipatingSpecialties: [
              {
                ParticipatingSpeciality: 'Skilled Nursing Fac',
                PatientMaxAgeNumber: '150',
                Division: 'Specialist',
                Gender: 'X',
                PatientMinAgeNumber: '0',
                Age: '0 - 150',
                SpecialtyCode: '012'
              },
              {
                ParticipatingSpeciality: 'Social Day Care',
                PatientMaxAgeNumber: '150',
                Division: 'Specialist',
                Gender: 'X',
                PatientMinAgeNumber: '0',
                Age: '0 - 150',
                SpecialtyCode: '662'
              },
              {
                ParticipatingSpeciality: 'Adult Day H Care',
                PatientMaxAgeNumber: '150',
                Division: 'Specialist',
                Gender: 'X',
                PatientMinAgeNumber: '0',
                Age: '0 - 150',
                SpecialtyCode: '664'
              }
            ],
            pzLoadTime: 'September 7, 2023 4:05:04 PM UTC',
            pzPageNameHash: '_pa72525828470278pz'
          });
        } else if (dataView === 'D_HCPLocationContractExpContactInfo') {
          resolve({
            pzLoadTime: 'September 7, 2023 4:44:21 PM UTC',
            pzPageNameHash: '_pa74874930838584pz',
            ContactInfo: [
              {
                ContactMiddleName: '',
                Email: 'Sam@site.com',
                ContactTitleName: 'Mr',
                Phone: '631-289-7700',
                ContactFirstName: '',
                Role: 'Service Location',
                Fax: '123-222-2222',
                ContactLastName: 'SAM'
              },
              {
                ContactMiddleName: '',
                Email: 'Sam@site.com',
                ContactTitleName: 'Mr',
                Phone: '631-289-7700',
                ContactFirstName: '',
                Role: 'Service Location',
                Fax: '123-222-2222',
                ContactLastName: 'SAM'
              },
              {
                ContactMiddleName: '',
                Email: 'Sam@site.com',
                ContactTitleName: 'Mr',
                Phone: '631-289-7700',
                ContactFirstName: '',
                Role: 'Service Location',
                Fax: '123-222-2222',
                ContactLastName: 'SAM'
              },
              {
                ContactMiddleName: '',
                Email: 'Sam@site.com',
                ContactTitleName: 'Mr',
                Phone: '631-289-7700',
                ContactFirstName: '',
                Role: 'Service Location',
                Fax: '123-222-2222',
                ContactLastName: 'SAM'
              },
              {
                ContactMiddleName: '',
                Email: 'Sam@site.com',
                ContactTitleName: 'Mr',
                Phone: '631-289-7700',
                ContactFirstName: '',
                Role: 'Service Location',
                Fax: '123-222-2222',
                ContactLastName: 'SAM'
              },
              {
                ContactMiddleName: '',
                Email: 'Sam@site.com',
                ContactTitleName: 'Mr',
                Phone: '631-289-7700',
                ContactFirstName: '',
                Role: 'Service Location',
                Fax: '123-222-2222',
                ContactLastName: 'SAM'
              }
            ]
          });
        } else if (dataView === 'D_HCPLocMembership') {
          resolve({
            ProfessionalID: 'P-0001-GUBV',
            MembershipDirectory: [
              {
                ParticipatingPlanCode: 'QGDP',
                AcceptingMemberships: 'N',
                CompanyName: 'HIX:PHSP Individual',
                Capacity: 0,
                ParticipatingPlanName: 'Individual PHSP Gold',
                MembersByCompany: 0,
                ReasonCode: 'D16',
                Reason: 'Doesn’t Schedule Appt w/Members',
                CompanyCode: '42'
              },
              {
                ParticipatingPlanCode: 'MPPO',
                AcceptingMemberships: 'N',
                CompanyName: 'Healthfirst Insurance Company',
                Capacity: 0,
                ParticipatingPlanName: 'PPO',
                MembersByCompany: 0,
                ReasonCode: 'D16',
                Reason: 'Doesn’t Schedule Appt w/Members',
                CompanyCode: '45'
              },
              {
                ParticipatingPlanCode: 'HFSG',
                AcceptingMemberships: 'N',
                CompanyName: 'Healthfirst Insurance Company',
                Capacity: 0,
                ParticipatingPlanName: 'Healthfirst Small Group',
                MembersByCompany: 0,
                ReasonCode: 'D16',
                Reason: 'Doesn’t Schedule Appt w/Members',
                CompanyCode: '45'
              },
              {
                ParticipatingPlanCode: 'HFID',
                AcceptingMemberships: 'N',
                CompanyName: 'Healthfirst Insurance Company',
                Capacity: 0,
                ParticipatingPlanName: 'Healthfirst Individual',
                MembersByCompany: 0,
                ReasonCode: 'D16',
                Reason: 'Doesn’t Schedule Appt w/Members',
                CompanyCode: '45'
              },
              {
                ParticipatingPlanCode: 'QSVP',
                AcceptingMemberships: 'N',
                CompanyName: 'HIX:PHSP Individual',
                Capacity: 0,
                ParticipatingPlanName: 'Individual PHSP Silver',
                MembersByCompany: 0,
                ReasonCode: 'D16',
                Reason: 'Doesn’t Schedule Appt w/Members',
                CompanyCode: '42'
              },
              {
                ParticipatingPlanCode: 'QPLP',
                AcceptingMemberships: 'N',
                CompanyName: 'HIX:PHSP Individual',
                Capacity: 0,
                ParticipatingPlanName: 'Individual PHSP Platinum',
                MembersByCompany: 0,
                ReasonCode: 'D16',
                Reason: 'Doesn’t Schedule Appt w/Members',
                CompanyCode: '42'
              },
              {
                ParticipatingPlanCode: 'QGNP',
                AcceptingMemberships: 'N',
                CompanyName: 'HIX:PHSP Individual',
                Capacity: 0,
                ParticipatingPlanName: 'Individual PHSP Green',
                MembersByCompany: 0,
                ReasonCode: 'D16',
                Reason: 'Doesn’t Schedule Appt w/Members',
                CompanyCode: '42'
              },
              {
                ParticipatingPlanCode: 'QBZP',
                AcceptingMemberships: 'N',
                CompanyName: 'HIX:PHSP Individual',
                Capacity: 0,
                ParticipatingPlanName: 'Individual  Prepaid Health Services plan',
                MembersByCompany: 0,
                ReasonCode: 'D16',
                Reason: 'Doesn’t Schedule Appt w/Members',
                CompanyCode: '42'
              },
              {
                ParticipatingPlanCode: 'EPB',
                AcceptingMemberships: 'N',
                CompanyName: 'HIX:PHSP Individual',
                Capacity: 0,
                ParticipatingPlanName: 'Essential Plan Basic',
                MembersByCompany: 0,
                ReasonCode: 'D16',
                Reason: 'Doesn’t Schedule Appt w/Members',
                CompanyCode: '42'
              },
              {
                ParticipatingPlanCode: 'EPA',
                AcceptingMemberships: 'N',
                CompanyName: 'HIX:PHSP Individual',
                Capacity: 0,
                ParticipatingPlanName: 'Essential Plan Aliessa',
                MembersByCompany: 0,
                ReasonCode: 'D16',
                Reason: 'Doesn’t Schedule Appt w/Members',
                CompanyCode: '42'
              }
            ],
            pzLoadTime: 'September 14, 2023 1:38:47 PM UTC',
            pzPageNameHash: '_pa668546375169989pz',
            TotalRecords: 18
          });
        } else if (dataView === 'D_HCPAdvancedSearch' && parameters.FirstName === 'Alex') {
          resolve({
            ErrorPage: {
              pyStatusMessage: '',
              pyErrorMessage: 'Data not found from Database',
              pyHTTPResponseCode: 0,
              pyStatusValue: '',
              pyAdviceText:
                'Oops something went wrong, please try again after sometime. If the error still persists please reach out to Atlas support team at Atlas_Yoda_Pega_Tech@healthfirst.org'
            },
            pzLoadTime: 'September 13, 2023 5:02:08 PM UTC',
            pzPageNameHash: '_pa594349506275972pz'
          });
        } else if (dataView === 'D_GetListOfCapabilities') {
          resolve({
            "UPHOCG" :"UPDATE PROG",
            "AHPCNL" :"ADD NEW"
          });
        } else {
          resolve({
            ErrorPage: {
              pyStatusMessage: '',
              pyErrorMessage: 'Data not found from Database',
              pyHTTPResponseCode: 0,
              pyStatusValue: '',
              pyAdviceText: 'Results not found for selected criteria.'
            },
            pzLoadTime: 'September 13, 2023 5:02:08 PM UTC',
            pzPageNameHash: '_pa594349506275972pz'
          });
        }
      });
    }
  };
};

export default {
  title: 'HfGenericGlobalSearch',
  component: HfGenericGlobalSearch
};

export const baseHfGenericGlobalSearch = () => {
  const props = {};

  return (
    <>
      <HfGenericGlobalSearch />
    </>
  );
};
