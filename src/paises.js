const paises = [
    {
      "sigla": "AF",
      "nome": "Afeganistão",
      "nome_ingles": "AFGHANISTAN"
    },
    {
      "sigla": "ZA",
      "nome": "África do Sul",
      "nome_ingles": "SOUTH AFRICA"
    },
    {
      "sigla": "AL",
      "nome": "Albânia",
      "nome_ingles": "ALBANIA"
    },
    {
      "sigla": "DE",
      "nome": "Alemanha",
      "nome_ingles": "GERMANY"
    },
    {
      "sigla": "AD",
      "nome": "Andorra",
      "nome_ingles": "ANDORRA"
    },
    {
      "sigla": "AO",
      "nome": "Angola",
      "nome_ingles": "ANGOLA"
    },
    {
      "sigla": "AI",
      "nome": "Anguila",
      "nome_ingles": "ANGUILLA"
    },
    {
      "sigla": "AG",
      "nome": "Antígua e Barbuda",
      "nome_ingles": "ANTIGUA AND BARBUDA"
    },
    {
      "sigla": "SA",
      "nome": "Arábia Saudita",
      "nome_ingles": "SAUDI ARABIA"
    },
    {
      "sigla": "DZ",
      "nome": "Argélia",
      "nome_ingles": "ALGERIA"
    },
    {
      "sigla": "AR",
      "nome": "Argentina",
      "nome_ingles": "ARGENTINA"
    },
    {
      "sigla": "AM",
      "nome": "Armênia",
      "nome_ingles": "ARMENIA"
    },
    {
      "sigla": "AW",
      "nome": "Aruba",
      "nome_ingles": "ARUBA"
    },
    {
      "sigla": "AU",
      "nome": "Austrália",
      "nome_ingles": "AUSTRALIA"
    },
    {
      "sigla": "AT",
      "nome": "Áustria",
      "nome_ingles": "AUSTRIA"
    },
    {
      "sigla": "AZ",
      "nome": "Azerbaijão",
      "nome_ingles": "AZERBAIJAN"
    },
    {
      "sigla": "BS",
      "nome": "Bahamas",
      "nome_ingles": "BAHAMAS"
    },
    {
      "sigla": "BD",
      "nome": "Bangladesh",
      "nome_ingles": "BANGLADESH"
    },
    {
      "sigla": "BB",
      "nome": "Barbados",
      "nome_ingles": "BARBADOS"
    },
    {
      "sigla": "BH",
      "nome": "Barein",
      "nome_ingles": "BAHREIN"
    },
    {
      "sigla": "BE",
      "nome": "Bélgica",
      "nome_ingles": "BELGIUM"
    },
    {
      "sigla": "BZ",
      "nome": "Belize",
      "nome_ingles": "BELIZE"
    },
    {
      "sigla": "BJ",
      "nome": "Benin",
      "nome_ingles": "BENIN"
    },
    {
      "sigla": "BM",
      "nome": "Bermuda",
      "nome_ingles": "BERMUDA"
    },
    {
      "sigla": "BY",
      "nome": "Bielorrússia",
      "nome_ingles": "BELARUS"
    },
    {
      "sigla": "BO",
      "nome": "Bolívia",
      "nome_ingles": "BOLIVIA"
    },
    {
      "sigla": "BA",
      "nome": "Bósnia Herzegovina",
      "nome_ingles": "BOSNIA HERZEGOVINA"
    },
    {
      "sigla": "BW",
      "nome": "Botsuana",
      "nome_ingles": "BOTSWANA"
    },
    {
      "sigla": "BR",
      "nome": "Brasil",
      "nome_ingles": "BRAZIL"
    },
    {
      "sigla": "BN",
      "nome": "Brunei",
      "nome_ingles": "BRUNEI DARUSSALAM"
    },
    {
      "sigla": "BG",
      "nome": "Bulgária",
      "nome_ingles": "BULGARIA"
    },
    {
      "sigla": "BF",
      "nome": "Burkina Fasso",
      "nome_ingles": "BURKINA FASO"
    },
    {
      "sigla": "BI",
      "nome": "Burundi",
      "nome_ingles": "BURUNDI"
    },
    {
      "sigla": "BT",
      "nome": "Butão",
      "nome_ingles": "BHUTAN"
    },
    {
      "sigla": "CV",
      "nome": "Cabo Verde",
      "nome_ingles": "CAPE VERDE ISLANDS"
    },
    {
      "sigla": "CM",
      "nome": "Camarões",
      "nome_ingles": "CAMEROON"
    },
    {
      "sigla": "KH",
      "nome": "Camboja",
      "nome_ingles": "CAMBODIA"
    },
    {
      "sigla": "CA",
      "nome": "Canadá",
      "nome_ingles": "CANADA"
    },
    {
      "sigla": "QA",
      "nome": "Catar",
      "nome_ingles": "QATAR"
    },
    {
      "sigla": "KZ",
      "nome": "Cazaquistão",
      "nome_ingles": "KAZAKHSTAN"
    },
    {
      "sigla": "TD",
      "nome": "Chade",
      "nome_ingles": "CHAD"
    },
    {
      "sigla": "CL",
      "nome": "Chile",
      "nome_ingles": "CHILE"
    },
    {
      "sigla": "CN",
      "nome": "China",
      "nome_ingles": "CHINA"
    },
    {
      "sigla": "CY",
      "nome": "Chipre",
      "nome_ingles": "CYPRUS"
    },
    {
      "sigla": "CO",
      "nome": "Colômbia",
      "nome_ingles": "COLOMBIA"
    },
    {
      "sigla": "CG",
      "nome": "Congo",
      "nome_ingles": "CONGO"
    },
    {
      "sigla": "KP",
      "nome": "Coréia do Norte",
      "nome_ingles": "KOREA – DEM. PEOPLE’S RE"
    },
    {
      "sigla": "KR",
      "nome": "Coréia do Sul",
      "nome_ingles": "KOREA – REP. OF"
    },
    {
      "sigla": "CI",
      "nome": "Costa do Marfim",
      "nome_ingles": "COTE D’IVOIRE"
    },
    {
      "sigla": "CR",
      "nome": "Costa Rica",
      "nome_ingles": "COSTA RICA"
    },
    {
      "sigla": "HR",
      "nome": "Croácia",
      "nome_ingles": "CROATIA"
    },
    {
      "sigla": "CU",
      "nome": "Cuba",
      "nome_ingles": "CUBA"
    },
    {
      "sigla": "CW",
      "nome": "Curaçao",
      "nome_ingles": "CURACAO"
    },
    {
      "sigla": "DK",
      "nome": "Dinamarca",
      "nome_ingles": "DENMARK"
    },
    {
      "sigla": "DJ",
      "nome": "Djibuti",
      "nome_ingles": "DJIBOUTI"
    },
    {
      "sigla": "DM",
      "nome": "Dominica",
      "nome_ingles": "DOMINICA"
    },
    {
      "sigla": "EG",
      "nome": "Egito",
      "nome_ingles": "EGYPT"
    },
    {
      "sigla": "SV",
      "nome": "El Salvador",
      "nome_ingles": "EL SALVADOR"
    },
    {
      "sigla": "AE",
      "nome": "Emirados Árabes Unidos",
      "nome_ingles": "UNITED ARAB EMIRATES"
    },
    {
      "sigla": "EC",
      "nome": "Equador",
      "nome_ingles": "ECUADOR"
    },
    {
      "sigla": "ER",
      "nome": "Eritréia",
      "nome_ingles": "ERITREA"
    },
    {
      "sigla": "SK",
      "nome": "Eslováquia",
      "nome_ingles": "SLOVAK REPUBLIC"
    },
    {
      "sigla": "SI",
      "nome": "Eslovênia",
      "nome_ingles": "SLOVENIA"
    },
    {
      "sigla": "ES",
      "nome": "Espanha",
      "nome_ingles": "SPAIN"
    },
    {
      "sigla": "US",
      "nome": "Estados Unidos",
      "nome_ingles": "UNITED STATES"
    },
    {
      "sigla": "EE",
      "nome": "Estônia",
      "nome_ingles": "ESTONIA"
    },
    {
      "sigla": "ET",
      "nome": "Etiópia",
      "nome_ingles": "ETHIOPIA"
    },
    {
      "sigla": "FJ",
      "nome": "Fiji",
      "nome_ingles": "FIJI ISLANDS"
    },
    {
      "sigla": "PH",
      "nome": "Filipinas",
      "nome_ingles": "PHILIPPINES"
    },
    {
      "sigla": "FI",
      "nome": "Finlândia",
      "nome_ingles": "FINLAND"
    },
    {
      "sigla": "FR",
      "nome": "França",
      "nome_ingles": "FRANCE"
    },
    {
      "sigla": "GA",
      "nome": "Gabão",
      "nome_ingles": "GABON"
    },
    {
      "sigla": "GM",
      "nome": "Gâmbia",
      "nome_ingles": "THE GAMBIA"
    },
    {
      "sigla": "GH",
      "nome": "Gana",
      "nome_ingles": "GHANA"
    },
    {
      "sigla": "GI",
      "nome": "Gibraltar",
      "nome_ingles": "GIBRALTAR"
    },
    {
      "sigla": "GD",
      "nome": "Granada",
      "nome_ingles": "GRENADA"
    },
    {
      "sigla": "GR",
      "nome": "Grécia",
      "nome_ingles": "GREECE"
    },
    {
      "sigla": "GL",
      "nome": "Groenlândia",
      "nome_ingles": "GREENLAND"
    },
    {
      "sigla": "GP",
      "nome": "Guadalupe",
      "nome_ingles": "GUADELOUPE"
    },
    {
      "sigla": "GU",
      "nome": "Guam",
      "nome_ingles": "GUAM"
    },
    {
      "sigla": "GT",
      "nome": "Guatemala",
      "nome_ingles": "GUATEMALA"
    },
    {
      "sigla": "GY",
      "nome": "Guiana",
      "nome_ingles": "GUYANA"
    },
    {
      "sigla": "GF",
      "nome": "Guiana Francesa",
      "nome_ingles": "FRENCH GUIANA"
    },
    {
      "sigla": "GN",
      "nome": "Guiné",
      "nome_ingles": "GUINEA"
    },
    {
      "sigla": "GQ",
      "nome": "Guiné Equatorial",
      "nome_ingles": "EQUATORIAL GUINEA"
    },
    {
      "sigla": "GW",
      "nome": "Guiné-Bissau",
      "nome_ingles": "GUINEA BISSAU"
    },
    {
      "sigla": "HT",
      "nome": "Haiti",
      "nome_ingles": "HAITI"
    },
    {
      "sigla": "NL",
      "nome": "Holanda",
      "nome_ingles": "NETHERLANDS"
    },
    {
      "sigla": "HN",
      "nome": "Honduras",
      "nome_ingles": "HONDURAS"
    },
    {
      "sigla": "HK",
      "nome": "Hong Kong",
      "nome_ingles": "HONG KONG"
    },
    {
      "sigla": "HU",
      "nome": "Hungria",
      "nome_ingles": "HUNGARY"
    },
    {
      "sigla": "YE",
      "nome": "Iêmen",
      "nome_ingles": "YEMEN ARAB REP."
    },
    {
      "sigla": "BV",
      "nome": "Ilha Bouvet",
      "nome_ingles": "BOUVET ISLAND"
    },
    {
      "sigla": "UM",
      "nome": "Ilha Minor Outlying",
      "nome_ingles": "U.S. MINOR OUTLYING ISLA"
    },
    {
      "sigla": "NF",
      "nome": "Ilha Norfolk",
      "nome_ingles": "NORFOLK ISLAND"
    },
    {
      "sigla": "RE",
      "nome": "Ilha Reunião",
      "nome_ingles": "REUNION ISLAND"
    },
    {
      "sigla": "ST",
      "nome": "Ilha São Tomé e Príncipe",
      "nome_ingles": "SÃO TOMÉ AND PRÍNCIPE"
    },
    {
      "sigla": "KY",
      "nome": "Ilhas Cayman",
      "nome_ingles": "CAYMAN ISLANDS"
    },
    {
      "sigla": "CX",
      "nome": "Ilhas Christmas",
      "nome_ingles": "CHRISTMAS ISLAND"
    },
    {
      "sigla": "CC",
      "nome": "Ilhas Coco",
      "nome_ingles": "COCOS ISLANDS"
    },
    {
      "sigla": "KM",
      "nome": "Ilhas Comoro",
      "nome_ingles": "COMORO ISLANDS"
    },
    {
      "sigla": "CK",
      "nome": "Ilhas Cook",
      "nome_ingles": "COOK ISLANDS"
    },
    {
      "sigla": "FK",
      "nome": "Ilhas Falkland",
      "nome_ingles": "FALKLAND ISLANDS"
    },
    {
      "sigla": "FO",
      "nome": "Ilhas Faroe",
      "nome_ingles": "FAROE ISLANDS"
    },
    {
      "sigla": "HM",
      "nome": "Ilhas Heard & McDonald",
      "nome_ingles": "HEARD AND MCDONALD ISLAN"
    },
    {
      "sigla": "MP",
      "nome": "Ilhas Mariana do Norte",
      "nome_ingles": "NORTHERN MARIANA ISLANDS"
    },
    {
      "sigla": "MH",
      "nome": "Ilhas Marshall",
      "nome_ingles": "MARSHALL ISLANDS"
    },
    {
      "sigla": "MU",
      "nome": "Ilhas Maurício",
      "nome_ingles": "MAURITIUS"
    },
    {
      "sigla": "SB",
      "nome": "Ilhas Salomão",
      "nome_ingles": "SOLOMON ISLANDS"
    },
    {
      "sigla": "SJ",
      "nome": "Ilhas Svalbard & Jan Mayan",
      "nome_ingles": "SVALBARD & JAN MAYAN ISL"
    },
    {
      "sigla": "TC",
      "nome": "Ilhas Turks e Caicos",
      "nome_ingles": "TURKS AND CAICOS ISLANDS"
    },
    {
      "sigla": "VI",
      "nome": "Ilhas Virgens Americanas",
      "nome_ingles": "U.S.VIRGIN ISLANDS"
    },
    {
      "sigla": "VG",
      "nome": "Ilhas Virgens Britânicas",
      "nome_ingles": "BRITISH VIRGIN ISLANDS"
    },
    {
      "sigla": "WF",
      "nome": "Ilhas Wallis e Futuna",
      "nome_ingles": "WALLIS AND FUTUNA ISLAND"
    },
    {
      "sigla": "IN",
      "nome": "Índia",
      "nome_ingles": "INDIA"
    },
    {
      "sigla": "ID",
      "nome": "Indonésia",
      "nome_ingles": "INDONESIA"
    },
    {
      "sigla": "gb-eng",
      "nome": "Inglaterra",
      "nome_ingles": "ENGLAND"
    },
    {
      "sigla": "IR",
      "nome": "Irã",
      "nome_ingles": "IRAN"
    },
    {
      "sigla": "IQ",
      "nome": "Iraque",
      "nome_ingles": "IRAQ"
    },
    {
      "sigla": "IE",
      "nome": "Irlanda",
      "nome_ingles": "IRELAND"
    },
    {
      "sigla": "IS",
      "nome": "Islândia",
      "nome_ingles": "ICELAND"
    },
    {
      "sigla": "IL",
      "nome": "Israel",
      "nome_ingles": "ISRAEL"
    },
    {
      "sigla": "IT",
      "nome": "Itália",
      "nome_ingles": "ITALY"
    },
    {
      "sigla": "YU",
      "nome": "Iugoslavia",
      "nome_ingles": "YUGOSLAVIA"
    },
    {
      "sigla": "JM",
      "nome": "Jamaica",
      "nome_ingles": "JAMAICA"
    },
    {
      "sigla": "JP",
      "nome": "Japão",
      "nome_ingles": "JAPAN"
    },
    {
      "sigla": "JO",
      "nome": "Jordânia",
      "nome_ingles": "JORDAN"
    },
    {
      "sigla": "KI",
      "nome": "Kiribati",
      "nome_ingles": "KIRIBATI"
    },
    {
      "sigla": "KW",
      "nome": "Kuweit",
      "nome_ingles": "KUWAIT"
    },
    {
      "sigla": "LA",
      "nome": "Laos",
      "nome_ingles": "LAOS"
    },
    {
      "sigla": "LS",
      "nome": "Lesoto",
      "nome_ingles": "LESOTHO"
    },
    {
      "sigla": "LV",
      "nome": "Letônia",
      "nome_ingles": "LATVIA"
    },
    {
      "sigla": "LB",
      "nome": "Líbano",
      "nome_ingles": "LEBANON"
    },
    {
      "sigla": "LR",
      "nome": "Liberia",
      "nome_ingles": "LIBERIA"
    },
    {
      "sigla": "LY",
      "nome": "Libia",
      "nome_ingles": "LIBYA ARAB JAMAHIRIYA"
    },
    {
      "sigla": "LI",
      "nome": "Liechtenstein",
      "nome_ingles": "LIECHTENSTEIN"
    },
    {
      "sigla": "LT",
      "nome": "Lituânia",
      "nome_ingles": "LITHUANIA"
    },
    {
      "sigla": "LU",
      "nome": "Luxemburgo",
      "nome_ingles": "LUXEMBOURG"
    },
    {
      "sigla": "MK",
      "nome": "Macedônia",
      "nome_ingles": "MACEDONIA"
    },
    {
      "sigla": "MG",
      "nome": "Madagascar",
      "nome_ingles": "MALAGASY REPUBLIC"
    },
    {
      "sigla": "MY",
      "nome": "Malásia",
      "nome_ingles": "MALAYSIA"
    },
    {
      "sigla": "MW",
      "nome": "Malauí",
      "nome_ingles": "MALAWI"
    },
    {
      "sigla": "MV",
      "nome": "Maldivas",
      "nome_ingles": "MALDIVES"
    },
    {
      "sigla": "ML",
      "nome": "Mali",
      "nome_ingles": "MALI"
    },
    {
      "sigla": "MT",
      "nome": "Malta",
      "nome_ingles": "MALTA"
    },
    {
      "sigla": "MA",
      "nome": "Marrocos",
      "nome_ingles": "MOROCCO"
    },
    {
      "sigla": "MQ",
      "nome": "Martinica",
      "nome_ingles": "MARTINIQUE"
    },
    {
      "sigla": "IM",
      "nome": "Maurícia",
      "nome_ingles": "MAURICIA"
    },
    {
      "sigla": "MR",
      "nome": "Mauritânia",
      "nome_ingles": "MAURITANIA"
    },
    {
      "sigla": "YT",
      "nome": "Mayotte",
      "nome_ingles": "MAYOTTE"
    },
    {
      "sigla": "MX",
      "nome": "México",
      "nome_ingles": "MEXICO"
    },
    {
      "sigla": "MM",
      "nome": "Mianmar",
      "nome_ingles": "MYANMAR"
    },
    {
      "sigla": "FM",
      "nome": "Micronésia",
      "nome_ingles": "MICRONESIA"
    },
    {
      "sigla": "MZ",
      "nome": "Moçambique",
      "nome_ingles": "MOZAMBIQUE"
    },
    {
      "sigla": "MD",
      "nome": "Moldávia",
      "nome_ingles": "MOLDOVA"
    },
    {
      "sigla": "MC",
      "nome": "Mônaco",
      "nome_ingles": "MONACO"
    },
    {
      "sigla": "MN",
      "nome": "Mongólia",
      "nome_ingles": "MONGOLIA"
    },
    {
      "sigla": "ME",
      "nome": "Montenegro",
      "nome_ingles": "MONTENEGRO"
    },
    {
      "sigla": "MS",
      "nome": "Montserrat",
      "nome_ingles": "MONTSERRAT"
    },
    {
      "sigla": "NA",
      "nome": "Namíbia",
      "nome_ingles": "NAMIBIA"
    },
    {
      "sigla": "NR",
      "nome": "Nauru",
      "nome_ingles": "NAURU"
    },
    {
      "sigla": "NP",
      "nome": "Nepal",
      "nome_ingles": "NEPAL"
    },
    {
      "sigla": "NI",
      "nome": "Nicarágua",
      "nome_ingles": "NICARAGUA"
    },
    {
      "sigla": "NE",
      "nome": "Níger",
      "nome_ingles": "NIGER"
    },
    {
      "sigla": "NG",
      "nome": "Nigéria",
      "nome_ingles": "NIGERIA"
    },
    {
      "sigla": "NU",
      "nome": "Niue",
      "nome_ingles": "NIUE"
    },
    {
      "sigla": "NO",
      "nome": "Noruega",
      "nome_ingles": "NORWAY"
    },
    {
      "sigla": "NC",
      "nome": "Nova Caledônia",
      "nome_ingles": "NEW CALEDONIA"
    },
    {
      "sigla": "NZ",
      "nome": "Nova Zelândia",
      "nome_ingles": "NEW ZEALAND"
    },
    {
      "sigla": "OM",
      "nome": "Omã",
      "nome_ingles": "OMAN"
    },
    {
      "sigla": "PW",
      "nome": "Palau",
      "nome_ingles": "PALAU"
    },
    {
      "sigla": "PS",
      "nome": "Palestina",
      "nome_ingles": "PALESTINA"
    },
    {
      "sigla": "PA",
      "nome": "Panamá",
      "nome_ingles": "PANAMA CITY"
    },
    {
      "sigla": "PG",
      "nome": "Papua-Nova Guiné",
      "nome_ingles": "PAPUA NEW GUINEA"
    },
    {
      "sigla": "PK",
      "nome": "Paquistão",
      "nome_ingles": "PAKISTAN"
    },
    {
      "sigla": "PY",
      "nome": "Paraguai",
      "nome_ingles": "PARAGUAY"
    },
    {
      "sigla": "PE",
      "nome": "Peru",
      "nome_ingles": "PERU"
    },
    {
      "sigla": "PN",
      "nome": "Pitcairn",
      "nome_ingles": "PITCAIRN"
    },
    {
      "sigla": "PF",
      "nome": "Polinésia Francesa",
      "nome_ingles": "FRENCH POLYNESIA"
    },
    {
      "sigla": "PL",
      "nome": "Polônia",
      "nome_ingles": "POLAND"
    },
    {
      "sigla": "PR",
      "nome": "Porto Rico",
      "nome_ingles": "PUERTO RICO"
    },
    {
      "sigla": "PT",
      "nome": "Portugal",
      "nome_ingles": "PORTUGAL"
    },
    {
      "sigla": "KE",
      "nome": "Quênia",
      "nome_ingles": "KENYA"
    },
    {
      "sigla": "KG",
      "nome": "Quirguistã",
      "nome_ingles": "KYRGYZSTAN"
    },
    {
      "sigla": "GB",
      "nome": "Reino Unido",
      "nome_ingles": "UNITED KINGDOM"
    },
    {
      "sigla": "CF",
      "nome": "República Centro-Africana",
      "nome_ingles": "CENTRAL AFRICAN REPUBLIC"
    },
    {
      "sigla": "GE",
      "nome": "República da Geórgia",
      "nome_ingles": "GEORGIA"
    },
    {
      "sigla": "CD",
      "nome": "República Democrática do Congo",
      "nome_ingles": "CONGO DEMOCRATIC REP."
    },
    {
      "sigla": "DO",
      "nome": "República Dominicana",
      "nome_ingles": "DOMINICAN REPUBLIC"
    },
    {
      "sigla": "CZ",
      "nome": "República Tcheca",
      "nome_ingles": "CZECH REPUBLIC"
    },
    {
      "sigla": "RO",
      "nome": "Romênia",
      "nome_ingles": "ROMANIA"
    },
    {
      "sigla": "RW",
      "nome": "Ruanda",
      "nome_ingles": "RWANDA"
    },
    {
      "sigla": "RU",
      "nome": "Rússia",
      "nome_ingles": "RUSSIAN FEDERATION"
    },
    {
      "sigla": "EH",
      "nome": "Saara Ocidental",
      "nome_ingles": "WESTERN SAHARA"
    },
    {
      "sigla": "BL",
      "nome": "Saint Barthelemy",
      "nome_ingles": "SAINT BARTHELEMY"
    },
    {
      "sigla": "PM",
      "nome": "Saint-Pierre e Miquelon",
      "nome_ingles": "SAINT PIERRE AND MIQUELON"
    },
    {
      "sigla": "AS",
      "nome": "Samoa Americana",
      "nome_ingles": "AMERICAN SAMOA"
    },
    {
      "sigla": "WS",
      "nome": "Samoa Ocidental",
      "nome_ingles": "WESTERN SAMOA"
    },
    {
      "sigla": "SM",
      "nome": "San Marino",
      "nome_ingles": "SAN MARINO"
    },
    {
      "sigla": "SH",
      "nome": "Santa Helena",
      "nome_ingles": "SAINT HELENA"
    },
    {
      "sigla": "LC",
      "nome": "Santa Lúcia",
      "nome_ingles": "SAINT LUCIA"
    },
    {
      "sigla": "KN",
      "nome": "São Cristóvão e Névis",
      "nome_ingles": "SAINT KITTS AND NEVIS"
    },
    {
      "sigla": "TS",
      "nome": "São Martinho",
      "nome_ingles": "SAINT MARTIN"
    },
    {
      "sigla": "VC",
      "nome": "São Vicente e Granadinas",
      "nome_ingles": "SAINT VINCENT AND THE GRENADINES"
    },
    {
      "sigla": "YC",
      "nome": "Seicheles",
      "nome_ingles": "SEYCHELLES"
    },
    {
      "sigla": "SN",
      "nome": "Senegal",
      "nome_ingles": "SENEGAL"
    },
    {
      "sigla": "SL",
      "nome": "Serra Leoa",
      "nome_ingles": "SIERRA LEONE"
    },
    {
      "sigla": "RS",
      "nome": "Servia",
      "nome_ingles": "SERBIA"
    },
    {
      "sigla": "SG",
      "nome": "Singapura",
      "nome_ingles": "SINGAPORE"
    },
    {
      "sigla": "SY",
      "nome": "Síria",
      "nome_ingles": "SYRIA"
    },
    {
      "sigla": "SO",
      "nome": "Somalia",
      "nome_ingles": "SOMALIA"
    },
    {
      "sigla": "LK",
      "nome": "Sri Lanka",
      "nome_ingles": "SRI LANKA"
    },
    {
      "sigla": "SZ",
      "nome": "Suazilândia",
      "nome_ingles": "SWAZILAND"
    },
    {
      "sigla": "SD",
      "nome": "Sudão",
      "nome_ingles": "SUDAN"
    },
    {
      "sigla": "SS",
      "nome": "Sudão do Sul",
      "nome_ingles": "SOUTH SUDAN"
    },
    {
      "sigla": "SE",
      "nome": "Suécia",
      "nome_ingles": "SWEDEN"
    },
    {
      "sigla": "CH",
      "nome": "Suíça",
      "nome_ingles": "SWITZERLAND"
    },
    {
      "sigla": "SR",
      "nome": "Suriname",
      "nome_ingles": "SURINAME"
    },
    {
      "sigla": "TJ",
      "nome": "Tadjquistão",
      "nome_ingles": "TAJKISTAN"
    },
    {
      "sigla": "TH",
      "nome": "Tailândia",
      "nome_ingles": "THAILAND"
    },
    {
      "sigla": "TW",
      "nome": "Taiwan",
      "nome_ingles": "TAIWAN"
    },
    {
      "sigla": "TZ",
      "nome": "Tanzânia",
      "nome_ingles": "TANZANIA"
    },
    {
      "sigla": "TL",
      "nome": "Timor-Leste",
      "nome_ingles": "TIMOR-LESTE"
    },
    {
      "sigla": "TG",
      "nome": "Togo",
      "nome_ingles": "TOGO"
    },
    {
      "sigla": "TK",
      "nome": "Tokelau",
      "nome_ingles": "TOKELAU"
    },
    {
      "sigla": "TO",
      "nome": "Tonga",
      "nome_ingles": "TONGA"
    },
    {
      "sigla": "TT",
      "nome": "Trindade e Tobago",
      "nome_ingles": "TRINIDAD AND TOBAGO"
    },
    {
      "sigla": "TN",
      "nome": "Tunísia",
      "nome_ingles": "TUNISIA"
    },
    {
      "sigla": "TM",
      "nome": "Turcomenistão",
      "nome_ingles": "TURKMENISTAN"
    },
    {
      "sigla": "TC",
      "nome": "Turks e Caicos",
      "nome_ingles": "TURKS AND CAICOS ISLANDS"
    },
    {
      "sigla": "TR",
      "nome": "Turquia",
      "nome_ingles": "TURKEY"
    },
    {
      "sigla": "TV",
      "nome": "Tuvalu",
      "nome_ingles": "TUVALU"
    },
    {
      "sigla": "UA",
      "nome": "Ucrânia",
      "nome_ingles": "UKRAINE"
    },
    {
      "sigla": "UG",
      "nome": "Uganda",
      "nome_ingles": "UGANDA"
    },
    {
      "sigla": "UY",
      "nome": "Uruguai",
      "nome_ingles": "URUGUAY"
    },
    {
      "sigla": "UZ",
      "nome": "Uzbequistão",
      "nome_ingles": "UZBEKISTAN"
    },
    {
      "sigla": "VU",
      "nome": "Vanuatu",
      "nome_ingles": "VANUATU"
    },
    {
      "sigla": "VE",
      "nome": "Venezuela",
      "nome_ingles": "VENEZUELA"
    },
    {
      "sigla": "VN",
      "nome": "Vietnã",
      "nome_ingles": "VIETNAM"
    },
    {
      "sigla": "ZM",
      "nome": "Zâmbia",
      "nome_ingles": "ZAMBIA"
    },
    {
      "sigla": "ZW",
      "nome": "Zimbábue",
      "nome_ingles": "ZIMBABWE"
    }
   ]

export default paises;