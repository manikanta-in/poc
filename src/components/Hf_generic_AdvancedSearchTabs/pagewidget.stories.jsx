import HfGenericAdvancedSearchTabs from './index.jsx';

if (!window.PCore) {
  window.PCore = {};
}

window.PCore.getDataPageUtils = () => {
  return {
    getPageDataAsync: (dataView, context, parameters, options) => {
      return new Promise(resolve => {
        if (dataView === 'D_HCPAdvancedSearch' && parameters.HCPID === 'P-0000-') {
          resolve({
            pzLoadTime: 'July 7, 2023 6:21:44 PM UTC',
            pzPageNameHash: '_pa1209003961416106pz',
            TotalRecords: 176869,
            ProviderRecords: [
              {
                ProfessionalID: 'P-0000-2D0S',
                NetworkStatus: 'Out-Network',
                NPI: '1003000126',
                TaxID: 'None'
              },
              {
                ProfessionalID: 'P-0000-2D0T',
                NPI: '1003002072',
                NetworkStatus: 'Out-Network',
                TaxID: 'None'
              },
              {
                ProfessionalID: 'P-0000-2D0U',
                NetworkStatus: 'Out-Network',
                NPI: '1003002627',
                TaxID: 'None'
              },
              {
                ProfessionalID: 'P-0000-2D0V',
                Medicare: 'A0300074756',
                NPI: '1003002726',
                NetworkStatus: 'In-Network',
                TaxID: 'None',
                Name: 'ROBERT D DIAMOND'
              },
              {
                ProfessionalID: 'P-0000-2D0W',
                Medicare: 'PENDING',
                NetworkStatus: 'In-Network',
                NPI: '1003003070',
                TaxID: 'None',
                Medicaid: '02960552'
              },
              {
                ProfessionalID: 'P-0000-2D0X',
                Medicare: 'A400136431',
                NetworkStatus: 'In-Network',
                NPI: '1003003880',
                TaxID: 'None',
                Medicaid: '03455832'
              },
              {
                ProfessionalID: 'P-0000-2D0Y',
                NetworkStatus: 'Out-Network',
                NPI: '1003004201',
                TaxID: 'None',
                Name: 'NATALIE W PHILBRICK'
              },
              {
                ProfessionalID: 'P-0000-2D0Z',
                NetworkStatus: 'Out-Network',
                NPI: '1003004425',
                TaxID: 'None',
                Medicaid: '02965048',
                Name: 'VASTHY T JEAN-LOUIS'
              },
              {
                ProfessionalID: 'P-0000-2D10',
                NetworkStatus: 'Out-Network',
                NPI: '100300465634',
                TaxID: 'None',
                Medicaid: '03783795'
              },
              {
                ProfessionalID: 'P-0000-2D11',
                NetworkStatus: 'Out-Network',
                NPI: '1003005109',
                TaxID: 'None',
                Name: 'NICHOLAS A FETTMAN'
              }
            ]
          });
        } else if (dataView === 'D_HCFAdvancedSearch' && parameters.HCFID === 'F-0000-') {
          resolve({
            FacilityRecords: [
              {
                FacilityId: 'F-0000-7NYM',
                Address: '180 EAST PULASKI ROAD NY HUNTINGTON 117461915',
                Medicare: '234432',
                Phone: '111-222-3336',
                NetworkStatus: '',
                TaxId: '987',
                HCOName: 'Org Name',
                FacilityName: 'NYU LANGONE HUNTINGTON ME'
              }
            ],
            pzLoadTime: 'June 1, 2023 7:45:01 PM UTC',
            pzPageNameHash: '_pa6319750063449657pz',
            TotalRecords: 116744
          });
        } else if (dataView === 'D_HCOAdvancedSearch' && parameters.HCOID === 'O-0000-') {
          resolve({
            OrganizationRecords: [
              {
                EntityName: '',
                NetworkStatus: 'Out-Network',
                NPI: '',
                TaxID: '621310519',
                ID: 'O-0000-0001'
              },
              {
                EntityName: '',
                NetworkStatus: 'Out-Network',
                NPI: '',
                TaxID: '680437840',
                ID: 'O-0000-0002'
              },
              {
                EntityName: 'TRI LAKES',
                NetworkStatus: 'Out-Network',
                NPI: '1114150992',
                TaxID: '201261085',
                ID: 'O-0000-0003'
              },
              {
                EntityName: '',
                NetworkStatus: 'In-Network',
                NPI: '',
                TaxID: '133280509',
                ID: 'O-0000-0004'
              },
              {
                EntityName: '',
                NetworkStatus: 'Out-Network',
                NPI: '',
                TaxID: '156960061',
                ID: 'O-0000-0005'
              },
              {
                EntityName: '',
                NetworkStatus: 'In-Network',
                NPI: '',
                TaxID: '133902783',
                ID: 'O-0000-0006'
              },
              {
                EntityName: 'SKAMAGAS MARIA',
                NetworkStatus: 'Out-Network',
                NPI: '1871524892',
                TaxID: '059725645',
                ID: 'O-0000-0007'
              },
              {
                EntityName: '',
                NetworkStatus: 'In-Network',
                NPI: '',
                TaxID: '134036280',
                ID: 'O-0000-0008'
              },
              {
                EntityName: '',
                NetworkStatus: 'Out-Network',
                NPI: '1134326887',
                TaxID: '463770224',
                ID: 'O-0000-0009'
              },
              {
                EntityName: 'WIGS BY BARBARA LLC',
                NetworkStatus: 'Out-Network',
                NPI: '1851782023',
                TaxID: '464712994',
                ID: 'O-0000-000A'
              }
            ],
            pzLoadTime: 'July 7, 2023 8:19:20 PM UTC',
            pzPageNameHash: '_pa1213444440309366pz',
            TotalRecords: 76197
          });
        } else if (
          dataView === 'D_HCPProviderProfessionalDetails' &&
          parameters.ID === 'P-0000-2D0S'
        ) {
          resolve({
            Suffix: 'TAB',
            Sex: 'M',
            ProfessionalDetails: {
              DEA: [
                '368855-NY',
                '368855-NY',
                '368855-NY',
                '368855-NY',
                '368855-NY',
                '368855-NY',
                '368855-NY'
              ],
              ProviderLanguages: ['Afar', 'English', 'Spanish', 'French'],
              Medicare: '367796',
              Taxonomy: '363LF0000X',
              NPI: '1225335482',
              NetworkStatus: 'Out-of-Network',
              UPIN: '294269',
              Twitter: '',
              LegacyProviderID: [
                '411939629-1162',
                '411939629-1162',
                '411939629-1162',
                '411939629-1162',
                '411939629-1162',
                '411939629-1162',
                '411939629-1162',
                '411939629-1162',
                '411939629-1162',
                '411939629-1162'
              ],
              PlaceOfBirth: 'NY TX USA',
              SSN: '153215416',
              ContactInformationCard: [
                {
                  AddressLine1: '100 Church St',
                  AddressLine2: null,
                  CityName: 'New York',
                  StateProvinceName: 'NY',
                  ZipCode: '112211',
                  EmailID: 'test@healthfirst.org',
                  PhoneList: ['123-123-1111'],
                  AddressType: 'Home',
                  Fax: '555-555-5555'
                }
              ],
              LinkedIn: '',
              DoB: '1980-01-28',
              Alias: 'Max J',
              EffectiveFrom: '2020-12-13',
              Facebook: '',
              CAQHID: '',
              MedicaidList: [
                '123456-NY',
                '123456-NY',
                '123456-NY',
                '123456-NY',
                '123456-NY',
                '123456-NY'
              ]
            },
            pzLoadTime: 'July 14, 2023 7:16:03 PM UTC',
            License: '',
            pzPageNameHash: '_pa169542432364149pz',
            Title: 'ACNP',
            ID: 'P-FAKE-0001',
            Name: 'RX Max J Smith'
          });
        } else if (dataView === 'D_HCPCredentialLandingDetails') {
          resolve({
            LicenseNo: '',
            Suffix: '',
            Sex: 'F',
            pzLoadTime: 'July 12, 2023 6:42:43 PM UTC',
            CredentialDetails: [
              {
                Specialty: 'Retail Health Clinic',
                Specialist: 'Alex',
                DegreeName: 'Fake Degree',
                DegreePeriod: '',
                MoreInfo: ['Internship', ' Residency', ' Fellowship'],
                Certification: '',
                DateTime: '1970-01-01'
              }
            ],
            pzPageNameHash: '_pa1639660492695073pz',
            Title: 'FNP',
            ID: 'P-0000-003X',
            Name: 'ANN P NEVIN'
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
        } else if (dataView === 'D_LookUpRefData') {
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
                OrganizationName: 'My Org',
                PCPs: 4,
                Specialties: 10,
                HCOID: 'O-0000-1234',
                HCFs: 30,
                Membership: 'TBD',
                TaxID: '',
                HCPs: 20
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
                Address: '40 SAW MILL RIVER RD #UL1, HAWTHORNE, New York, 10532',
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
                PhoneNo: '0',
                ID: 'F-0004-5JG3',
                LocationFeatures: ['ADA'],
                ContactName: '',
                OfficeHoursList: [],
                LocationEffective: '1900-01-03'
              },
              {
                Status: 'In-Network',
                ParticipatingSpecialty: [],
                Email: '',
                Address: '173 FORT WASHINGTON AVE, NEW YORK, New York, 10032',
                Taxonomy: 'TBD',
                HospitalAffiliation: 'TBD',
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
                PhoneNo: '0',
                ID: 'F-0004-4HWT',
                LocationFeatures: ['ADA', 'Telemedicine'],
                ContactName: '',
                OfficeHoursList: [],
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
            HCODivision: 'General',
            NetworkStatus: 'Out-of-Network',
            pzLoadTime: 'July 14, 2023 3:58:54 PM UTC',
            Locations: ['GRACE HALL', 'HOLLEY CENTER', 'CARDIELLO-WENGER'],
            pzPageNameHash: '_pa157706716721789pz',
            Gender: 'X',
            HCOName: 'PETER G CARDIELLO, MD',
            LegacyProviderID: ['25MA08157700ANG'],
            PracticeAddress: '260 BROADWAY, NEWARK, New Jersey, 07104',
            AgeLimit: '0-150',
            FacilityProviderID: 'F-0004-1VVT',
            HCOID: 'O-0003-MP0Y',
            EffectiveFrom: '',
            LocationFeatures: [],
            OfficeLanguages: []
          });
        } else if (dataView === 'D_HCPNotesLandingDetails') {
          resolve({
            Suffix: '',
            Sex: '',
            pzLoadTime: 'July 14, 2023 6:28:58 PM UTC',
            License: '',
            pzPageNameHash: '_pa166717881528604pz',
            Title: '',
            TotalRecords: 0,
            Records: [],
            Name: ''
          });
        } else if (dataView === 'D_HCPLocandConOfficeHours') {
          resolve({
            OfficeHours: {
              Monday: [
                {
                  pyValue: '8:30 am - 7:30 pm'
                }
              ],
              Thursday: [
                {
                  pyValue: '8:30 am - 7:30 pm'
                }
              ],
              Friday: [
                {
                  pyValue: '8:30 am - 7:30 pm'
                }
              ],
              Sunday: [
                {
                  pyValue: '10:00 am - 5:30 pm'
                }
              ],
              Wednesday: [
                {
                  pyValue: '8:30 am - 7:30 pm'
                }
              ],
              Tuesday: [
                {
                  pyValue: '8:30 am - 7:30 pm'
                }
              ],
              Saturday: [
                {
                  pyValue: '9:00 am - 5:30 pm'
                }
              ]
            },
            pzLoadTime: 'September 15, 2023 1:01:44 PM UTC',
            pzPageNameHash: '_pa752710370781607pz',
            AreaOfExpertise: [],
            ParticpatingSpeciality: []
          });
        } else if (dataView === 'D_HCOOrgDetails') {
          resolve({
            OrganizationName: 'JULIAN  CRAIG, MD',
            City: '',
            AddressLine2: '',
            AddressLine1: '',
            State: '',
            Country: '',
            Details: {
              OrganizationName: 'JULIAN  CRAIG, MD',
              DEA: [],
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
              MedicaidList: [],
              EffectiveFrom: '',
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
                Medicare: '',
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
              Records: [
                {
                  Medicare: 'TBD',
                  ProfessionalID: 'P-0000-00VM',
                  Status: 'In-Network',
                  FirstName: 'AHUVA',
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
                  MedicaidList: ['12345'],
                  SpecialtyList: ['Dermatology']
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
        } else {
          resolve({
            FacilityRecords: [],
            TotalRecords: 0
          });
        }
      });
    }
  };
};

export default {
  title: 'HfGenericAdvancedSearchTabs',
  component: HfGenericAdvancedSearchTabs
};

export const baseHfGenericAdvancedSearchTabs = () => {
  const props = {};

  return (
    <>
      <HfGenericAdvancedSearchTabs />
    </>
  );
};
